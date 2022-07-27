import React from "react";
import PropTypes from "prop-types";
import Volunteer from './volunteer.js';
import './volunteerList.css';


const VolunteerList = ({volunteers, chageStatus}) => {
    const getVolunteers = volunteer.map(volunteer) {
        return (
            <Volunteer 
                key={Volunteer.volunteer_id}
                volunteer_id = {volunteer.volunteer_id}
        )
    }
}

