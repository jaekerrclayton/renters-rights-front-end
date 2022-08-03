import React from 'react';
import PropTypes from 'prop-types';
import Volunteer from './Volunteer';
import Schedule from './Schedule';

const Volunteers = (props) => {
    // console.log(volunteers);
    const getVolunteers = props.volunteers.map((volunteer) => {
        return (
            <>
                <Volunteer 
                        key={volunteer.volunteerId}
                        volunteerId={volunteer.volunteerId} 
                        name={volunteer.name} 
                        email={volunteer.email} 
                        status={volunteer.status} 
                        type={volunteer.type}
                        language={volunteer.language}
                        schedule={volunteer.schedule}
                />
            </>
        );
    });

    return (
        <div class="ml-3">
            {getVolunteers}
        </div>
    )
}

Volunteers.propTypes = {
    volunteers: PropTypes.arrayOf(PropTypes.object)

}


export default Volunteers;