import React from "react";
import Aux from "../hoc/Aux";
import NormalNavbar from "../components/Navbars/NormalNavbar";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
    return (
        <Aux >
            <NormalNavbar />
            <main>
                <div className="wrapper">
                    <img
                        alt="..."
                        width="100%"
                        height="100%"
                        className="path"
                        src={require("assets/img/path1.png").default}
                    />
                    {props.children}
                </div>
            </main>
            <Footer />
        </Aux>
    );
}

export default Layout;