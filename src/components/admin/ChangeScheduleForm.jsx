import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ChangeScheduleForm = (props) => {
    console.log(props.id);
    const [scheduleData, setScheduleData] = useState({'sun':null, 'mon':null, 'tue':null, 'wed':null, 'thu':null, 'fri':null, 'sat':null});

    const handleChange = (e) => {
        let formName = e.target.name;
        scheduleData[formName] = e.target.value
    };

    const submitScheduleData = (e) => {
        e.preventDefault();
        console.log(scheduleData);
        props.onChangeSchedCallback(scheduleData);
    };

    return (
        <Form onSubmit={submitScheduleData}>
            <Row>
            <h2>Update Volunteer's Schedule</h2>
            </Row>
            <Row>
                <Form.Group controlId="Sunday">
                    <h4>Sunday:</h4>
                    <Form.Check type="checkbox" name="sun" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="sun" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="Monday">
                    <h4>Monday:</h4>
                    <Form.Check type="checkbox" name="mon" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="mon" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="Tuesday">
                    <h4>Tuesday:</h4>
                    <Form.Check type="checkbox" name="tue" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="tue" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="Wednesday">
                    <h4>Wednesday</h4>
                    <Form.Check type="checkbox" name="wed" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="wed" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="Thursday">
                    <h4>Thursday:</h4>
                    <Form.Check type="checkbox" name="thu" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="thu" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="Friday">
                    <h4>Friday:</h4>
                    <Form.Check type="checkbox" name="fri" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="fri" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="Saturday">
                    <h4>Saturday</h4>
                    <Form.Check type="checkbox" name="sat" label="AM" value="morning" onChange={handleChange}/>
                    <Form.Check type="checkbox" name="sat" label="PM" value="afternoon" onChange={handleChange}/>
                </Form.Group>
            </Row>
                <button className="button-new-board-submit" type="submit">
                Update Schedule for Volunteer
                </button>
    </Form>
    );
};


export default ChangeScheduleForm;