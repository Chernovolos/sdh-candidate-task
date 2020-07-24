import React from "react";
import { connect } from "react-redux";
class List extends React.Component {

    render() {
        return (
            <div><h1>LIST</h1></div>
        );
    }
}

export default connect(
    state =>(null),
    dispatch => (null)
)(List);