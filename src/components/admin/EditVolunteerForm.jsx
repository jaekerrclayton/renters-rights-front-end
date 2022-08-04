import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const EditVolForm = ({onDeleteVolCallback, onEditVolCallback, name, email, status, type, language, id}) => {
    console.log(name);
    console.log(email);
    console.log(status);
    console.log(type);
    console.log(language);
    console.log(id);
    const kNewVolData = {
        'name': name,
        'email': email,
        'status': status, 
        'type': type,
        'language': language,
        'volunteerId':id
    };
    const [volunteerData, setVolunteerData] = useState(kNewVolData); 

    const handleChange = (e) => {
        let formName = e.target.name;
        volunteerData[formName] = e.target.value
        console.log(volunteerData);
    };

    const submitVolunteerData = (e) => {
        e.preventDefault();
        onEditVolCallback(volunteerData);
    };

    const deleteVolunteerData = (e) => {
        e.preventDefault();
        onDeleteVolCallback(id);
    }

    return (
        <Form onSubmit={submitVolunteerData}>
            <Row>
            <h2>Edit {name}</h2>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="" controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name="name" type="text" placeholder={name} onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" type="text" placeholder={email} onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="type">
                    <Form.Label>Type:</Form.Label>
                    <Form.Control name="type" type="text" placeholder={type} onChange={handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="language">
                        <Form.Label>Language:</Form.Label>
                        <Form.Control name="language" type="text" placeholder={language} onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <button className="button-new-board-submit" type="submit">
                    Update Volunteer 
                </button>
            </Row>
            <Row>
                <button onClick={deleteVolunteerData}>
                    Delete Volunteer
                </button>
            </Row>
    </Form>
    );
};

EditVolForm.propTypes = {
    onEditVolCallback: PropTypes.func.isRequired
};


export default EditVolForm;