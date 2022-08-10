import React from 'react';
import PropTypes from 'prop-types';
import Volunteer from './Volunteer';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

const Volunteers = (props) => {
    // console.log(typeof props.onEdit);
    const getVolunteers = props.volunteers.map((volunteer) => {
        return (
            <Accordion.Item eventKey={volunteer.volunteerId}>
                <Accordion.Header>{volunteer.name}</Accordion.Header>
                <Accordion.Body>
                    <Volunteer
                            key={volunteer.volunteerId}
                            volunteerId={volunteer.volunteerId}
                            email={volunteer.email} 
                            status={volunteer.status} 
                            type={volunteer.type}
                            language={volunteer.language}
                            schedule={volunteer.schedule}
                            onEditVolCallback={props.onEdit}
                            onDeleteVolCallback={props.onDelete}
                            onAddSchedCallback={props.addSched}
                            changeStatus={props.changeStatus}
                    />
                </Accordion.Body>
            </Accordion.Item>
        );
    });

    return (
        <Accordion>
                {getVolunteers}
        </Accordion>
    )
}

Volunteers.propTypes = {
    volunteers: PropTypes.arrayOf(PropTypes.object),
    onEdit : PropTypes.func.isRequired,
}


export default Volunteers;