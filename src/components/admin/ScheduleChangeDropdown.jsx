import { Dropdown } from "react-bootstrap"
import ChangeScheduleForm from "./ChangeScheduleForm";
import React, { useState } from 'react';
import { convertToObject } from "typescript";



const ScheduleChangeDropDown = (volunteers) => {
    const [changeForm, setChangeForm] = useState({'display':false, 'id':0, 'sched':null});
    const getChangeForm = (e) => {
        e.preventDefault();
        const newId = Number(e.target.target);
        let newVolunteer = volunteers.volunteers.filter((volunteer) => volunteer.volunteerId === newId)
        setChangeForm({'display':!changeForm.display, 'id':newId, 'sched':newVolunteer.schedule});
    };

    const filteredVolunteers = volunteers.volunteers.filter((volunteer) => volunteer.schedule != null);

    const getDropDown = filteredVolunteers.map((volunteer) => {
        console.log(volunteer.volunteerId);
        return (
            <Dropdown.Item target={volunteer.volunteerId} onClick={getChangeForm}>{volunteer.name}</Dropdown.Item>
        )
    })

    return (
        <div>
            <Dropdown id='scheduleChangeDropdown' autoClose='true'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Change a Volunteer's Schedule
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {getDropDown}
                </Dropdown.Menu>
            </Dropdown>
            <div style={{display: changeForm.display ? '' : 'none'}}>
                <ChangeScheduleForm type='button' volunteerId={changeForm.id} sched={changeForm.sched} onChangeSchedCallback={volunteers.changeSchedule}/>
            </div>
        </div>
    )
}

export default ScheduleChangeDropDown;