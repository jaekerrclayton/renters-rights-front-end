import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';

const ScheduleList = (props) => {
    console.log(props.props[0]);
    // let schedules = props.props[0];
    const sunAmMap = props.props[0]['sun-am'].map((vol) =>
        <li>{vol}</li>
    );
    const sunPmMap = props.props[0]['sun-pm'].map((vol) =>
        <li>{vol}</li>
    );
    const monAmMap = props.props[0]['mon-am'].map((vol) =>
        <li>{vol}</li>
    );
    const monPmMap = props.props[0]['mon-pm'].map((vol) =>
        <li>{vol}</li>
    );
    const tueAmMap = props.props[0]['tue-am'].map((vol) =>
    <li>{vol}</li>
    );
    const tuePmMap = props.props[0]['tue-pm'].map((vol) =>
        <li>{vol}</li>
    );
    const wedAmMap = props.props[0]['wed-am'].map((vol) =>
        <li>{vol}</li>
    );
    const wedPmMap = props.props[0]['wed-pm'].map((vol) =>
        <li>{vol}</li>
    );
    const thuAmMap = props.props[0]['thu-am'].map((vol) =>
        <li>{vol}</li>
    );
    const thuPmMap = props.props[0]['thu-pm'].map((vol) =>
        <li>{vol}</li>
    );
    const friAmMap = props.props[0]['fri-am'].map((vol) =>
        <li>{vol}</li>
    );
    const friPmMap = props.props[0]['fri-pm'].map((vol) =>
        <li>{vol}</li>
    );
    const satAmMap = props.props[0]['sat-am'].map((vol) =>
        <li>{vol}</li>
    );
    const satPmMap = props.props[0]['sat-pm'].map((vol) =>
        <li>{vol}</li>
    );
    return (
        <div>
            <h4>Sunday</h4>
            <p style={{display: sunAmMap ? '' : 'none'}}>AM: {sunAmMap}</p>
            <p style={{display: sunAmMap ? '' : 'none'}}>PM: {sunPmMap}</p>
            <h4>Monday</h4>
            <p style={{display: monAmMap ? '' : 'none'}}>AM: {monAmMap}</p>
            <p style={{display: monAmMap ? '' : 'none'}}>PM: {monPmMap}</p>
            <h4>Tuesday</h4>
            <p style={{display: tueAmMap ? '' : 'none'}}>AM: {tueAmMap}</p>
            <p style={{display: tueAmMap ? '' : 'none'}}>PM: {tuePmMap}</p>
            <h4>Wednesday</h4>
            <p style={{display: wedAmMap ? '' : 'none'}}>AM: {wedAmMap}</p>
            <p style={{display: wedAmMap ? '' : 'none'}}>PM: {wedPmMap}</p>
            <h4>Thursday</h4>
            <p style={{display: thuAmMap ? '' : 'none'}}>AM: {thuAmMap}</p>
            <p style={{display: thuAmMap ? '' : 'none'}}>PM: {thuPmMap}</p>
            <h4>Friday</h4>
            <p style={{display: friAmMap ? '' : 'none'}}>AM: {friAmMap}</p>
            <p style={{display: friAmMap ? '' : 'none'}}>PM: {friPmMap}</p>
            <h4>Saturday</h4>
            <p style={{display: satAmMap ? '' : 'none'}}>AM: {satAmMap}</p>
            <p style={{display: satAmMap ? '' : 'none'}}>PM: {satPmMap}</p>
        </div>
    )
}

ScheduleList.propTypes =  {

    sun: PropTypes.string,
    mon: PropTypes.string,
    wed: PropTypes.string,
    thu: PropTypes.string,
    fri: PropTypes.string,
    sat: PropTypes.string


}

export default ScheduleList;