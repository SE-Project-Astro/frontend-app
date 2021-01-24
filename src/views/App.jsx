import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fade } from "reactstrap";
import lunarCalendar from "./LuanrCalenadr/LunarCalendar";
import AstroObjects from "./AstroObjects";
import AstroObject from "./AstroObjects/AstroObject";
import AddNewAstroObj from "./AddNewAstroObj/AddNewAstroObj";
import AddNews from "./AddNews/AddNews";
import NewsPage from "./NewsPage";
import LoginPage from "views/examples/LoginPage";
import NewProfilePage from "views/examples/NewProfilePage";
import NewRegisterPage from "views/examples/NewRegisterPage"
import News from "./NewsPage/News";
import RingLoader from "react-spinners/RingLoader";
import NewLandingPage from "views/examples/NewLandingPage";
import ContactUs from "./examples/ContactUs";
import About from "./examples/About"
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../redux/api/client";
import { setAdminLoginState, setUserData, serUserType} from "redux/slices/authSlice";

const App = () => {
  let [loading, setLoading] = useState(true);
  let isAdminLogin = useSelector((state) => state.users.isAdminLogin);
  let isRegUserLogin = useSelector((state) => state.users.isRegUserLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    dispatch(setAdminLoginState(sessionStorage.getItem("token")));
    dispatch((setUserData(JSON.parse(sessionStorage.getItem("userData")))))
    dispatch(serUserType(sessionStorage.getItem("userType")))
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
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={NewRegisterPage} />
              <Route path="/landing" component={NewLandingPage} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/about" component={About} />
              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/astro/:astroObjectId" component={AstroObject} />
              )}

              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/astro" component={AstroObjects} />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                <Route
                  path="/astroUpdate/:astroObjectId"
                  component={AddNewAstroObj}
                />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/astroAdd" component={AddNewAstroObj} />
              )}

              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/news/:newsId" component={News} />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/news" component={NewsPage} />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/newsUpdate/:newsId" component={AddNews} />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/newsAdd" component={AddNews} />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                <Route path="/lunarCalendar" component={lunarCalendar} />
              )}
              {(isAdminLogin || isRegUserLogin) && (
                  <Route path="/profile" component={NewProfilePage} />
              )}

              <Redirect to="/landing" />

            </Switch>
          </Fade>
        </Layout>
      )}
    </React.Fragment>
  );
};

export default App;
