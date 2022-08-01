import React from 'react';
import PropTypes from 'prop-types';
import Volunteer from './Volunteer';

const VolunteerList = (volunteers) => {
    console.log(volunteers);
    const getVolunteers = volunteers.map((volunteer) => {
        return (
        <Volunteer 
                id={volunteer.volunteerId} 
                name={volunteer.name} 
                email={volunteer.email} 
                status={volunteer.status} 
                type={volunteer.type}
                language={volunteer.language}
        />
        );
    });

    return (
        <div>
            {getVolunteers}
        </div>
    )
}


export default VolunteerList;