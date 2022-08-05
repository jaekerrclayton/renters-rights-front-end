import { Dropdown } from "react-bootstrap"
import ChangeScheduleForm from "./ChangeScheduleForm";
import React, { useState } from 'react';



const ScheduleChangeDropDown = (volunteers) => {
    const [changeForm, setChangeForm] = useState({'display':false, 'id':0});

    const getChangeForm = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setChangeForm({'display':!changeForm.display, 'id':e.target.value});
        console.log(changeForm.display);
    };

    const getDropDown = volunteers.volunteers.map((volunteer) => {
        console.log(volunteer.volunteerId);
        return (
            <Dropdown.Item value={volunteer.volunteerId} onClick={getChangeForm}>{volunteer.name}</Dropdown.Item>
        )
    })

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Change a Volunteer's Schedule
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {getDropDown}
                </Dropdown.Menu>
            </Dropdown>
            <div style={{display: changeForm.display ? '' : 'none'}}>
                <ChangeScheduleForm type='button' volunteerId={changeForm.id} onChangeSchedCallback={volunteers.changeSchedule}/>
            </div>
        </div>
    )
}

export default ScheduleChangeDropDown;