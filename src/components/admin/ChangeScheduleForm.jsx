import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ChangeScheduleForm = (props) => {
    console.log(props.volunteerId);
    console.log(props.sched);
    const [scheduleData, setScheduleData] = useState({});

    let title = "Update Volunteer's Schedule"

    if (props.sched != null) {
        setScheduleData(props.sched);
    } else {
        title = "Please Add a Schedule"
    };

    const handleChange = (e) => {
        let formName = e.target.name;
        if (scheduleData[formName] !== e.target.value) {
            scheduleData[formName] = e.target.value;
        }
        console.log(scheduleData);
    };

    const submitScheduleData = (e) => {
        e.preventDefault();
        console.log(scheduleData);
        props.onChangeSchedCallback(props.volunteerId, scheduleData);
    };

    return (
        <Form onSubmit={submitScheduleData}>
            <Row>
            <h5>{title}</h5>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="Sunday">
                        <h6 className='days'>Sunday:</h6>
                        <Form.Check type="checkbox" name="sun" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="sun" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="Monday">
                        <h6 className='days'>Monday:</h6>
                        <Form.Check type="checkbox" name="mon" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="mon" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="Tuesday">
                        <h6 className='days'>Tuesday:</h6>
                        <Form.Check type="checkbox" name="tue" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="tue" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="Wednesday">
                        <h6 className='days'>Wednesday</h6>
                        <Form.Check type="checkbox" name="wed" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="wed" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="Thursday">
                        <h6 className='days'>Thursday:</h6>
                        <Form.Check type="checkbox" name="thu" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="thu" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="Friday">
                        <h6 className='days'>Friday:</h6>
                        <Form.Check type="checkbox" name="fri" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="fri" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="Saturday">
                        <h6 className='days'>Saturday</h6>
                        <Form.Check type="checkbox" name="sat" label="AM" value="morning" onChange={handleChange}/>
                        <Form.Check type="checkbox" name="sat" label="PM" value="afternoon" onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <button className="button-new-board-submit" type="submit">
                    Update Volunteer Schedule
                    </button>
                </Col>
            </Row>
    </Form>
    );
};


export default ChangeScheduleForm;