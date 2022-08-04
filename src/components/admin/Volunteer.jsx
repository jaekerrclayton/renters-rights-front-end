import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';
import Row from 'react-bootstrap/Row';
import EditVolForm from './EditVolunteerForm';

const Volunteer = (props, onEditVolCallback, onDeleteVolCallback) => {
    const [displayForm, setDisplayForm] = useState({display: false})
    console.log(props.language);

    return (
        <div class="m-3">
            <Row> {props.name}</Row>
            <Row><b>id:</b> {props.volunteerId}</Row>
            <Row><b>email:</b> {props.email}</Row>
            <Row><b>status:</b> {props.status}</Row>
            <Row><b>type:</b> {props.type}</Row>
            <Row><b>language:</b> {props.language}</Row>
            <Row>{props.schedule===null ? '' : <Schedule props={props.schedule}/>}</Row>
            <Row><button onClick={() => {setDisplayForm({'display':!displayForm.display})}}>Edit {props.name} Profile</button></Row>
            <Row>
                <div style={{display: displayForm.display ? '' : 'none'}}>
                    <EditVolForm 
                    onEditVolCallback={props.onEditVolCallback} 
                    name={props.name} 
                    email={props.email} 
                    status={props.status} 
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