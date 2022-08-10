import React from 'react';
import PropTypes from 'prop-types';

const Schedule = (props) => {
    let schedule = props;
    console.log(schedule);
    if (schedule.props){
        schedule = schedule.props;
    }
    return (
        <div>
            <p style={{display: schedule.sun===null ? 'none': ''}}>Sunday: {schedule.sun}</p>
            <p style={{display: schedule.mon===null ? 'none': ''}}>Monday: {schedule.mon}</p>
            <p style={{display: schedule.tue===null ? 'none': ''}}>Tuesday: {schedule.tue}</p>
            <p style={{display: schedule.wed===null ? 'none': ''}}>Wednesday: {schedule.wed}</p>
            <p style={{display: schedule.thu===null ? 'none': ''}}>Thursday: {schedule.thu}</p>
            <p style={{display: schedule.fri===null ? 'none': ''}}>Friday: {schedule.fri}</p>
            <p style={{display: schedule.sat===null ? 'none': ''}}>Saturday: {schedule.sat}</p>
        </div>
    )
}

Schedule.propTypes =  {

    sun: PropTypes.string,
    mon: PropTypes.string,
    wed: PropTypes.string,
    thu: PropTypes.string,
    fri: PropTypes.string,
    sat: PropTypes.string


}

export default Schedule