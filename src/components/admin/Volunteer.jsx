import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';

const Volunteer = (props) => {
    console.log(props.schedule);
    // const [displaySchedule, setDisplaySchedule] = useState('false');

    return (
        <div>
            <h4>name: {props.name}</h4>
            <h6>volunteer id: {props.volunteerId}</h6>
            <p>email: {props.email}</p>
            <p>status: {props.status}</p>
            <p>type: {props.type}</p>
            <p>language: {props.language}</p>
            {/* <p><button style={{display: props.schedule===null ? 'none': ''}} onClick={() => {setDisplaySchedule(!displaySchedule)}}>get schedule</button></p> */}
            <p>{props.schedule===null ? '' : <Schedule props={props.schedule}/>}</p>
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