import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fade } from "reactstrap";
import lunarCalendar from "./LuanrCalenadr/LunarCalendar";
import AstroObjects from "./AstroObjects";
import AstroObject from "./AstroObjects/AstroObject";
import AddNewAstroObj from "./AddNewAstroObj/AddNewAstroObj";
import NewsPage from "./NewsPage";
import LoginPage from "views/examples/LoginPage";
import RegisterPage from "views/examples/NewRegisterPage";
import News from "./NewsPage/News";
import RingLoader from "react-spinners/RingLoader";
import NewLandingPage from "views/examples/NewLandingPage";
import {useDispatch, useSelector} from "react-redux";
import {setAuthToken} from "../redux/api/client";
import {setAdminLoginState} from "redux/slices/authSlice"

const App = () => {
  let [loading, setLoading] = useState(true);
  let isAdminLogin = useSelector(state => state.users.isAdminLogin)
  let isRegUserLogin = useSelector(state => state.users.isRegUserLogin)
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    dispatch(setAdminLoginState(sessionStorage.getItem("token")))
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <div
          className="sweet-loading"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RingLoader color="#fff" loading={true} size={100} />
        </div>
      ) : (
        <Layout>
          <Fade>
            <Switch>
              <Route
                  path="/login"
                  render={(props) => <LoginPage {...props} />}
              />
              <Route
                  path="/reg"
                  render={(props) => <RegisterPage {...props} />}
              />
              <Route path="/landing" render={(props) => <NewLandingPage {...props} />} />
              { isAdminLogin || isRegUserLogin ?
                <React.Fragment>
                  <Route path="/astro/:astroObjectId" component={AstroObject}/>
                  <Route
                      path="/astro"
                      render={(props) => <AstroObjects {...props} />}
                  />
                  <Route
                      path="/astroUpdate/:astroObjectId"
                      render={(props) => <AddNewAstroObj {...props} />}
                  />
                  <Route path="/astroAdd" component={AddNewAstroObj} />
                  <Route path="/news/:newsId" component={News} />
                  <Route path="/news" render={(props) => <NewsPage {...props} />} />
                  <Route path="/lunarCalendar" component={lunarCalendar} />
                </React.Fragment>
              : <Redirect to="/landing" />}
            </Switch>
          </Fade>
        </Layout>
      )}
    </React.Fragment>
  );
};


export default App;
