import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { USERS } from "../constants/routes";
import Header from "../components/header";
import UserComponent from "./users";

class Layout extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path={USERS.ROUTE} component={UserComponent}/>
                    <Redirect to={{pathname: USERS.ROUTE}}/>
                </Switch>
            </>
        );
    }
}

export default Layout;