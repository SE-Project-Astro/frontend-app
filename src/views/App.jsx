import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {Route, Switch} from "react-router-dom";
import {Fade} from 'reactstrap';
import AstroObjects from "./AstroObjects";
import AstroObject from "./AstroObjects/AstroObject";
import NewsPage from "./NewsPage";
import RingLoader from "react-spinners/RingLoader";
import Index from "views/Index"

const App = () => {

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)

    }, [])

    return (
        <React.Fragment>
            {loading ?
                <div className="sweet-loading" style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <RingLoader color="#fff" loading={true} size={100}/>
                </div>
                :
                <Layout>
                    <Fade>
                        <Switch>
                            <Route
                                path="/astro/:astroObjectId"
                                component={AstroObject} />}
                            />
                            <Route
                                path="/astro"
                                render={(props) => <AstroObjects {...props} />}
                            />
                            <Route
                                path="/news"
                                render={(props) => <NewsPage {...props} />}
                            />
                            <Route
                                path="/"
                                render={(props) => <Index {...props} />}
                            />
                        </Switch>
                    </Fade>
                </Layout>
            }
        </React.Fragment>
    );
}

export default App;