import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const Schedule = (props) => {
    return (
        <div>
            <h4>Sunday: {props.sun}</h4>
            <h6>Monday: {props.mon}</h6>
            <p>Tuesday: {props.tue}</p>
            <p>Wednesday: {props.wed}</p>
            <p>Thursday: {props.thu}</p>
            <p>Friday: {props.fri}</p>
            <p>Saturday: {props.sat}</p>
        </div>
    )
}

export default Schedule