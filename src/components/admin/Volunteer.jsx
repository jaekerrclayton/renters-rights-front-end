import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';
import Row from 'react-bootstrap/Row';

const Volunteer = (props) => {
    // console.log(props.schedule);

    return (
        <div class="m-3">
            <Row> {props.name}</Row>
            <Row><b>id:</b> {props.volunteerId}</Row>
            <Row><b>email:</b> {props.email}</Row>
            <Row><b>status:</b> {props.status}</Row>
            <Row><b>type:</b> {props.type}</Row>
            <Row><b>language:</b> {props.language}</Row>
            <Row>{props.schedule===null ? '' : <Schedule props={props.schedule}/>}</Row>
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