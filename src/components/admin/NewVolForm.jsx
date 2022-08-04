import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const kNewVolData = {
    name: '',
    email: '',
    status: '', 
    type: '',
    language: ''
};

const NewVolForm = ({onAddVolCallback}) => {
    const [volunteerData, setVolunteerData] = useState(kNewVolData); 
    const [checkboxes, setChecked] = useState({'Legal':false, 'Hotline':false, 'Translation':false, 'Moving':false, 'English':false, 'Spanish':false})

    const handleChange = (e) => {
        let formName = e.target.name;
        volunteerData[formName] = e.target.value
        if (formName === 'language') {
            volunteerData[formName] += ', '
        }
        console.log(volunteerData);
    };

    const changeChecked = (e) => {
        e.preventDefault();
        let value = e.target.value;
        checkboxes[value] = !checkboxes[value];
        console.log(checkboxes);
    }

    const submitVolunteerData = (e) => {
        e.preventDefault();
        if (checkboxes.Legal){
            volunteerData.type += 'Legal, '
        }
        if (checkboxes.Hotline){
            volunteerData.type += 'Hotline, '
        }
        if (checkboxes.Translation){
            volunteerData.type += 'Translation, '
        }
        if (checkboxes.Moving){
            volunteerData.type += 'Moving'
        }
        if (checkboxes.English){
            volunteerData.language += ' English'
        }
        if (checkboxes.Spanish){
            volunteerData.language += ' Spanish'
        }
        console.log(volunteerData);
        onAddVolCallback(volunteerData);
    };

    return (
        <Form onSubmit={submitVolunteerData}>
            <Row>
            <h2>Add a New Volunteer</h2>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="" controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter volunteer's name" onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" type="text" placeholder="Enter volunteer's email" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="type">
                        <h4>Type:</h4>
                        <Form.Check type="checkbox" name="type" label="Hotline" value="Hotline" onChange={changeChecked}/>
                        <Form.Check type="checkbox" name="type" label="Translation" value="Translation" onChange={changeChecked}/>
                        <Form.Check type="checkbox" name="type" label="Legal" value="Legal" onChange={changeChecked}/>
                        <Form.Check type="checkbox" name="type" label="Moving" value="Moving" onChange={changeChecked}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="language">
                        <h4>Language:</h4>
                        <Form.Check type="checkbox" label="English" value="English" onChange={changeChecked}/>
                        <Form.Check type="checkbox" label="Spanish" value="Spanish" onChange={changeChecked}/>
                        <Form.Control type="text" name='language' placeholder="other" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
                <button className="button-new-board-submit" type="submit">
                Add New Volunteer 
                </button>
    </Form>
    );
};

NewVolForm.propTypes = {
    onAddVolCallback: PropTypes.func.isRequired
};


export default NewVolForm;