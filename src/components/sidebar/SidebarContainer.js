import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./sidebar.css";

const SidebarContainer = (props) => {
    const routes = [{path: "/", label: "Home"}, {path: "/tasks", label: "Tasks"}, {path: "/journal", label: "Journal"}]
    return(
        <>
            <Nav
            classname="col-md-12 d-none d-md-block Sidebar"
            activeKey="/home"
            onSelect={selectedKey => props.history.push(selectedKey)}>
                <div className="sidebar-sticky"></div>
                {routes.map(route => {
                    return(
                        <Nav.Item className="col-xs-2" key={route.label}>
                            <Nav.Link eventKey={route.path}>{route.label}</Nav.Link>
                        </Nav.Item>
                    )
                })}

            </Nav>
        </>
    )
}

export default withRouter(SidebarContainer);