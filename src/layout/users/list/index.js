import React from "react";
import { connect } from "react-redux";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { deleteUser, getUserList } from "../actions";
import { Link } from "react-router-dom";
import { USERS } from "../../../constants/routes";
import { generatePath}  from "react-router";

class List extends React.Component {

    componentDidMount() {
        this.props.initialize();
    }

    handleRemoveUser = (id) => {
        console.log(id);
        this.props.removeUser(id);
    };

    onUserEdit = (id) => {
        this.props.history.push({pathname: USERS.LINK_EDIT(id)});
    };

    onUserCreate = () => {
        this.props.history.push({pathname: USERS.LINK_EDIT()});
    };

    render() {
        let { users } = this.props;
        // console.log(users);
        return (
            <Container>
                <section>
                    <Row>
                        <Col>
                            <Button onClick={() => {this.onUserCreate()}} variant="outline-info" className="mb-3 text-uppercase">Done</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Birth Date</th>
                                        <th>Gender</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(({id, firstName, lastName, birthDate, gender}) => {
                                            return (
                                                <tr key={id}>
                                                    <td>
                                                        <Link to={ generatePath(USERS.DETAILS, {id})}>
                                                            {id}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={ generatePath(USERS.DETAILS, {id})}>
                                                            {firstName}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={ generatePath(USERS.DETAILS, {id})}>
                                                            {lastName}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={ generatePath(USERS.DETAILS, {id})}>
                                                            {birthDate}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={ generatePath(USERS.DETAILS, {id})}>
                                                            {gender}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => this.handleRemoveUser(id)} variant="outline-danger" size="sm"  className="mr-3 text-uppercase">delete</Button>
                                                        <Button onClick={() => this.onUserEdit(id)} variant="outline-info" size="sm" className="text-uppercase">edit</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}

export default connect(
    state => ({
        users: state.users.list.users
    }),
    dispatch => ({
        initialize: () => dispatch(getUserList()),
        removeUser: (id) => dispatch(deleteUser(id, () => dispatch(getUserList())))
    })
)(List);