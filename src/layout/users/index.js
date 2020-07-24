import React from "react";
import { Route, Switch } from "react-router";
import {USERS} from "../../constants/routes";
import List from "./list";
import Details from "./details";
import Edit from "./edit";


class UserComponent extends React.Component {

    render(){
        return (
            <Switch>
                <Route path={USERS.LIST} component={List}/>
                <Route path={USERS.DETAILS} component={Details}/>
                <Route path={USERS.EDIT} component={Edit}/>
            </Switch>
        );
    }
}

export default UserComponent;