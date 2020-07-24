import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {

    render() {
        let { location } = this.props;
        return (
            <div className="header-container">
                <div className="container">
                   <header>
                        <Navbar collapseOnSelect expand="lg p-0">
                            <Navbar.Brand>
                                <Link to="/users">
                                    logo
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="nav-toggle responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav>
                                    <Nav.Link className="nav-list">
                                        <Link to="/users/list"
                                              data-name="Users"
                                              className={`nav-item ${location.pathname === "/users"? "is-active": ""}`}>
                                            Users List
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link  className="nav-list">
                                        <Link to="/users/details/:id"
                                              data-name="Details"
                                              className={`nav-item ${location.pathname === "/details/:id"? "is-active": ""}`}>
                                            Details
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link className="nav-list">
                                        <Link to="/users/edit/:id"
                                              data-name="EditUser"
                                              className={`nav-item ${location.pathname === "/edit/:id"? "is-active": ""}`}>
                                            Edit User
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                   </header>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);