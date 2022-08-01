import React, { useState, useEffect } from "react";
import axios from 'axios';

export const URL='https://renters-rights-back-end.herokuapp.com/admin/';

function Contact() {
  const [volunteers, setVolunteers] = useState();
  const [schedules, setSchedules] = useState();

  useEffect(() => {
    axios 
      .get(URL + 'volunteers')
      .then((res) =>{
        console.log(res.data);
        const newVolunteers = res.data.map((volunteer) => {
          return {
            volunteerId: volunteer.volunteerId,
            name: volunteer.name,
            email: volunteer.email,
            status: volunteer.status,
            type: volunteer.type,
            language: volunteer.language,
          };
        });
        console.log(newVolunteers);
        setVolunteers(newVolunteers);
        console.log("hello?")
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const getSchedules= () => {
    axios.get(URL + 'schedules')
    .then((res) =>{
      console.log(res.data);
      const newSchedules = res.data.map((schedule) => {
        return {
          sun: schedule.sun,
          mon: schedule.mon,
          tue: schedule.tue,
          wed: schedule.wed,
          thu: schedule.thu,
          fri: schedule.fri,
          sat: schedule.sat,
          volunteerId: schedule.volunteerBySchedule.volunteerId,
          name: schedule.volunteerBySchedule.name
        };
      });
      console.log(newSchedules);
      setSchedules(newSchedules);
      console.log("schedules?")
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  return (
    <div>
      <h1>Volunteers</h1>
      <button onClick={getSchedules}>Get Schedules</button>
    </div>
  );
}

export default Contact;

