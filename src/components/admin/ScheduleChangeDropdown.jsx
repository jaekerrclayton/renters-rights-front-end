import { Dropdown } from "react-bootstrap"
import ChangeScheduleForm from "./ChangeScheduleForm";
import React, { useState } from 'react';



const ScheduleChangeDropDown = (volunteers) => {
    const [changeForm, setChangeForm] = useState({'display':false, 'id':0});

    const getChangeForm = (e) => {
        e.preventDefault();
        const newId = e.target.target;
        setChangeForm({'display':!changeForm.display, 'id':newId});
    };

    const getDropDown = volunteers.volunteers.map((volunteer) => {
        console.log(volunteer.volunteerId);
        return (
            <Dropdown.Item target={volunteer.volunteerId} onClick={getChangeForm}>{volunteer.name}</Dropdown.Item>
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