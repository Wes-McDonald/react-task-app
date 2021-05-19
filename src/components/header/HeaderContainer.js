import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./header.css";

const HeaderContainer = ({appName, routes, logout, isAuth, user}) => {

    return(
        <Navbar className="Header">
        <Navbar.Brand id="navbarText" href="/">{appName}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          {routes.map((route, index) => {
              return(
              <Navbar.Text key={index} id="navbarText" className="p-2">
                  <Link to={route.path} id="navbarText">{route.label}</Link>
             </Navbar.Text>)
          })}
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text id="navbarText" className="p-2">
            { isAuth ? `Signed in as: ${user}` : null }
          </Navbar.Text>
          <Navbar.Text id="navbarText" className="p-2" onClick={logout}>
            { isAuth ? "Logout" : null }
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    )
};

export default HeaderContainer;