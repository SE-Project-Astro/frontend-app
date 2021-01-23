import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

export default function NormalNavbar() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    let isAdminLogin = useSelector(state => state.users.isAdminLogin)
    let isRegUserLogin = useSelector(state => state.users.isRegUserLogin)
    const [collapseOut, setCollapseOut] = React.useState("");
    const [color, setColor] = React.useState("navbar-transparent");
    React.useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return function cleanup() {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    const changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            setColor("bg-info");
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            setColor("navbar-transparent");
        }
    };
    const toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(!collapseOpen);
    };
    const onCollapseExiting = () => {
        setCollapseOut("collapsing-out");
    };
    const onCollapseExited = () => {
        setCollapseOut("");
    };
    // const scrollToDownload = () => {
    //   document
    //     .getElementById("download-section")
    //     .scrollIntoView({ behavior: "smooth" });
    // };
    return (
        <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        style={{
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: "700",
                            fontSize: "20px",
                        }}
                        to="/"
                        tag={Link}
                        id="navbar-brand"
                    >
                        GUIDE Astro
                    </NavbarBrand>
                    <button
                        aria-expanded={collapseOpen}
                        className="navbar-toggler navbar-toggler"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar bar1"/>
                        <span className="navbar-toggler-bar bar2"/>
                        <span className="navbar-toggler-bar bar3"/>
                    </button>
                </div>
                <Collapse
                    className={"justify-content-end" + collapseOut}
                    navbar
                    isOpen={collapseOpen}
                    onExiting={onCollapseExiting}
                    onExited={onCollapseExited}
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    BLK•React
                                </a>
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                                <button
                                    aria-expanded={collapseOpen}
                                    className="navbar-toggler"
                                    onClick={toggleCollapse}
                                >
                                    <i className="tim-icons icon-simple-remove"/>
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        {isAdminLogin || isRegUserLogin ?
                            <React.Fragment>
                                <NavItem className="">
                                    <NavLink tag={Link} to="/astro">
                                        Astronomical Objects
                                    </NavLink>
                                </NavItem>
                                <NavItem className="active">
                                    <NavLink tag={Link} to="/news">
                                        News Page
                                    </NavLink>
                                </NavItem>
                                <NavItem className="">
                                    <NavLink tag={Link} to="/lunarCalendar">
                                        Lunar Calendar
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button
                                        className="nav-link d-none d-lg-block"
                                        color="primary"
                                        target="_blank"
                                        href=""
                                    >
                                        <i className="tim-icons icon-spaceship"/> HOME
                                    </Button>
                                </NavItem>
                            </React.Fragment>
                            : null
                        }
                        {isAdminLogin || isRegUserLogin
                            ? null
                            :
                            <NavItem>
                                <Button
                                    className="nav-link d-none d-lg-block"
                                    color="default"
                                    href="/profile-page"
                                >
                                    <i className="tim-icons icon-single-02"/> Sign up
                                </Button>
                            </NavItem>
                        }
                        <NavItem>
                            <Button
                                className="nav-link d-none d-lg-block"
                                color="default"
                                href="/profile-page"
                            >
                                <i className="tim-icons icon-single-02"/> {isAdminLogin || isRegUserLogin ? "Profile" : "Sign in"}
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
