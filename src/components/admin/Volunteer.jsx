import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const Volunteer = (props) => {
    return (
        <div>
            <h4>name: {props.name}</h4>
            <h6>volunteer id: {props.volunteerId}</h6>
            <p>email: {props.email}</p>
            <p>status: {props.status}</p>
            <p>type: {props.type}</p>
            <p>language: {props.language}</p>
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



}


export default Volunteer;