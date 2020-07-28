import React from "react";
import { connect } from "react-redux";
import { deleteUser, getUserDetails } from "../actions";
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { USERS } from "../../../constants/routes"

class Details extends React.Component {

    componentDidMount() {
        this.props.initialize(this.props.match.params.id);
    }

    onDeleteSuccess = () => {
        this.props.history.push({pathname: USERS.LIST});
    };

    handleRemoveUser = (id) => {
        console.log(id);
        this.props.removeUser(id, this.onDeleteSuccess);
    };

    onUserEdit = (id) => {
        this.props.history.push({pathname: USERS.LINK_EDIT(id)});
    };

    render() {
        let { user: { id, firstName, lastName, birthDate, gender, job, isActive, biography } } = this.props;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={9}>
                        <Card>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">ID:</span> {id}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">First Name:</span> {firstName}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">Last Name:</span> {lastName}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">Birth Date:</span> {birthDate}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">Gender:</span> {gender}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">Job:</span> {job}</ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">Biography:</span> {biography}</ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-uppercase font-weight-bolder">Status: </span>
                                    <span className={isActive ? "text-success": "text-danger"}>
                                        {isActive ? "Active": "Not Active"}
                                    </span>
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <div className="d-flex">
                                    <Button onClick={() => {this.handleRemoveUser(id)}} size="sm" variant="danger"  className="mr-3 text-uppercase">Delete</Button>
                                    <Button onClick={() => {this.onUserEdit(id)}} size="sm" variant="info"  className="mr-3 text-uppercase">Edit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(
    state => ({
        user: state.users.details.user,
    }),
    dispatch => ({
        initialize: (id) => dispatch(getUserDetails(id)),
        removeUser: (id, onDone) => dispatch(deleteUser(id, onDone))
    })
)(Details);