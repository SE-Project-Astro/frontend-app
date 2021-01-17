import React from 'react';
import Layout from "../Layout/Layout";
import {Route, Switch} from "react-router-dom";
import AstroObjects from "./AstroObjects";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route
                    path="/astro"
                    render={(props) => <AstroObjects {...props} />}
                />
            </Switch>
        </Layout>
    );
}

export default App;