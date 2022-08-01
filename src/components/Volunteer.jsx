import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const Volunteer = (props) => {
    return (
        <div>
            <li>volunteer id: {props.volunteerId}</li>
            <li>name: {props.name}</li>
            <li>email: {props.email}</li>
            <li>status: {props.status}</li>
            <li>type: {props.type}</li>
            <li>language: {props.language}</li>
        </div>
    )
}


Volunteer.propTypes =  {

    volunteerId: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,



}


export default Volunteer;