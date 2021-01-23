import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Route, Switch } from "react-router-dom";
import { Fade } from "reactstrap";
import lunarCalendar from "./LuanrCalenadr/LunarCalendar";
import AstroObjects from "./AstroObjects";
import AstroObject from "./AstroObjects/AstroObject";
import AddNewAstroObj from "./AddNewAstroObj/AddNewAstroObj";
import NewsPage from "./NewsPage";
import News from "./NewsPage/News";
import RingLoader from "react-spinners/RingLoader";
import Index from "views/Index";

const App = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
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
              <Route path="/astro/:astroObjectId" component={AstroObject} />
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
              <Route path="/" render={(props) => <Index {...props} />} />
            </Switch>
          </Fade>
        </Layout>
      )}
    </React.Fragment>
  );
};

export default App;
