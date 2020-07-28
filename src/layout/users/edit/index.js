import React from "react";
import { withFormik } from "formik";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {NEW_ID, USERS} from "../../../constants/routes";
import {createNewUser, getUpdateUser, getUserDetailsForEdit} from "../actions";
import User from "../../../models/user";

class Edit extends React.Component {

    componentDidMount() {
        this.props.initialize(this.props.match.params.id);
    }

    onUpdateUser = (id, values) => {
        let user = new User(values);
        this.props.updateUser(id, user)
    };

    onCreateUser = (values) => {
        let user = new User(values);
        this.props.createUser(user);
        console.log("send request to create user", user)
        // send request to create user
    };

    onUpdateUserCancel = () => {
        this.props.history.push({pathname: USERS.LIST});
    };

    render() {
        const { match, values, handleChange, handleBlur } = this.props;
        let isNew = match.params.id === NEW_ID;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <Form.Group controlId="formFirstName">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        {/*{errors.firstName && touched.firstName && <div className="feedback">{errors.firstName}</div>}*/}
                    </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name :</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            {/*{errors.lastName && touched.lastName && <div className="feedback">{errors.lastName}</div>}*/}
                        </Form.Group>

                        <Form.Group controlId="formBirthDate">
                            <Form.Label>Birth Date :</Form.Label>
                            <Form.Control
                                type="text"
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                name="birthDate"
                                placeholder="dd-mm-yyyy"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthDate}
                            />
                            {/*{errors.birthDate && touched.birthDate && <div className="feedback">{errors.birthDate}</div>}*/}
                        </Form.Group>

                        <Form.Group controlId="formGender">
                            <Form.Label>Gender :</Form.Label>
                            <Form.Control
                                as="select"
                                name="gender"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.gender}
                            >
                                <option value="male" label="male"/>
                                <option value="female" label="female"/>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formJob">
                            <Form.Label>Job :</Form.Label>
                            <Form.Control
                                type="text"
                                name="job"
                                placeholder="Job"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.job}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBiography">
                            <Form.Label>Biography: </Form.Label>
                            <Form.Control
                                as="textarea"
                                name="biography"
                                rows="3"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.biography}
                            />
                        </Form.Group>

                        <Form.Group controlId="formStatus" className="d-flex">
                            <Form.Label className="pr-3">Active user :</Form.Label>
                            <Form.Check
                                name="isActive"
                                onChange={handleChange}
                                value={values.isActive}
                                checked={values.isActive}
                                onBlur={handleBlur}
                                // isInvalid={!!errors.isActive}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button onClick={() => this.onUpdateUserCancel()} variant="outline-danger text-uppercase" className="mr-3">Cancel</Button>
                            {
                                isNew ?
                                    <Button onClick={() => {this.onCreateUser(values)}} type="submit" variant="outline-success" className="mr-3 text-uppercase">Create User</Button> :
                                    <Button onClick={() => {this.onUpdateUser(this.props.match.params.id, values)}} type="submit" variant="outline-success text-uppercase">Update User</Button>
                            }
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        )
    }
}



const EditWithForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        let isNew = props.match.params.id === NEW_ID;
        let values = {
            firstName: "",
            lastName: "",
            birthDate: "",
            gender: "",
            job: "",
            biography: "",
            isActive: false,
        };
        if (!isNew && props.user) {
            console.log("edit mode INITIALIZING FORM WITH USER");
            values = {...props.user};
        } else {
            console.log("create mode INITIALIZING FORM WITHOUT USER");
        }
        console.log(values);
        return values;
    },

    // Custom sync validation
    validate: values => {
        const errors = {};
        console.log(values);

        if (!values.firstName) {
            errors.firstName = "Заполните это поле";
        }
        if(!values.lastName) {
            errors.lastName = "Заполните это поле";
        }
        return errors;
    },

    handleSubmit: (values, {props}) => {
        console.log(values);
        props.onSubmit(values);
    },

    displayName: "TicketForm",
})(Edit);

export default connect(
    state => ({
        user: state.users.edit.user,
    }),
    dispatch => ({
        initialize: (id) => dispatch(getUserDetailsForEdit(id)),
        updateUser: (id, user) => dispatch(getUpdateUser(id, user)),
        createUser: (user) => dispatch(createNewUser(user)),
    })
)(EditWithForm);
