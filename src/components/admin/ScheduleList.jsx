import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Schedule from './Schedule';

const ScheduleList = (props) => {
    // return (
    //     <div>
    //         <p style={{display: props.props.sun===null ? 'none': ''}}>Sunday: {props.props.sun}</p>
    //         <p style={{display: props.props.mon===null ? 'none': ''}}>Monday: {props.props.mon}</p>
    //         <p style={{display: props.props.tue===null ? 'none': ''}}>Tuesday: {props.props.tue}</p>
    //         <p style={{display: props.props.wed===null ? 'none': ''}}>Wednesday: {props.props.wed}</p>
    //         <p style={{display: props.props.thu===null ? 'none': ''}}>Thursday: {props.props.thu}</p>
    //         <p style={{display: props.props.fri===null ? 'none': ''}}>Friday: {props.props.fri}</p>
    //         <p style={{display: props.props.sat===null ? 'none': ''}}>Saturday: {props.props.sat}</p>
    //     </div>
    // )
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