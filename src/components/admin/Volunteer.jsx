import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditVolForm from './EditVolunteerForm';

const Volunteer = (props, onEditVolCallback, onDeleteVolCallback, changeStatus) => {
    // console.log(typeof props.changeStatus);
    const [displayForm, setDisplayForm] = useState({display: false})
    const originallyChecked = props.status === 'online' ? true : false;
    const [checked, setChecked] = useState(originallyChecked);
    // console.log(props.language);

    const handleChange = () => {
        setChecked(!checked);
        const currentStatus = checked === true? 'offline' : 'online';
        const request = { status : currentStatus }
        // console.log(props.volunteerId);
        // console.log(status);
        props.changeStatus(props.volunteerId, request);
    };

    return (
        <div>
            <Row><h3>{props.name}</h3></Row>
            <Row>
                <Col>
                    <b>id:</b> 
                </Col>
                <Col>
                    {props.volunteerId}
                </Col>
            </Row>
            <Row>
                <Col>
                    <b>email:</b>
                </Col>
                <Col>
                    {props.email}
                </Col>
            </Row>
            <Row>
                <Col>
                    <b>status:</b> 
                </Col>
                <Col>
                    <input type="checkbox" checked={checked} onChange={handleChange} />{props.status}
                </Col>
            </Row>
            <Row>
                <Col>
                    <b>type:</b>
                </Col>
                <Col>
                    {props.type}
                </Col>
            </Row>
            <Row>
                <Col>
                    <b>language:</b> 
                </Col>
                <Col>
                    {props.language}
                </Col>
            </Row>
            <Row>{props.schedule===null ? '' : <Schedule props={props.schedule}/>}</Row>
            <Row><button onClick={() => {setDisplayForm({'display':!displayForm.display})}}>Edit {props.name} Profile</button></Row>
            <Row>
                <div style={{display: displayForm.display ? '' : 'none'}}>
                    <EditVolForm 
                    onEditVolCallback={props.onEditVolCallback} 
                    name={props.name} 
                    email={props.email} 
                    type={props.type} 
                    language={props.language}
                    id={props.volunteerId}
                    onDeleteVolCallback={props.onDeleteVolCallback}
                    />
                </div>
            </Row>
        </div>
    )
}


Volunteer.propTypes =  {
    volunteerId: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
    language: PropTypes.string,
    schedule: PropTypes.any,
}


export default Volunteer;