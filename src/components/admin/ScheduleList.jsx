import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';

const ScheduleList = (props) => {
    // console.log(props.props[0]);
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
            <p style={{display: sunAmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {sunAmMap}
            </p>
            <p style={{display: sunPmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b> 
                {sunPmMap}
            </p>
            <h4>Monday</h4>
            <p style={{display: monAmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {monAmMap}
            </p>
            <p style={{display: monPmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b>
                {monPmMap}
            </p>
            <h4>Tuesday</h4>
            <p style={{display: tueAmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {tueAmMap}
            </p>
            <p style={{display: tuePmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b> 
                {tuePmMap}
            </p>
            <h4>Wednesday</h4>
            <p style={{display: wedAmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {wedAmMap}
            </p>
            <p style={{display: wedPmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b> 
                {wedPmMap}
            </p>
            <h4>Thursday</h4>
            <p style={{display: thuPmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {thuAmMap}
            </p>
            <p style={{display: thuAmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b> 
                {thuPmMap}
            </p>
            <h4>Friday</h4>
            <p style={{display: friPmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {friAmMap}
            </p>
            <p style={{display: friAmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b> 
                {friPmMap}
            </p>
            <h4>Saturday</h4>
            <p style={{display: satPmMap.length > 0 ? '' : 'none'}}>
                <b>AM:</b> 
                {satAmMap}
            </p>
            <p style={{display: satPmMap.length > 0 ? '' : 'none'}}>
                <b>PM:</b> 
                {satPmMap}
            </p>
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