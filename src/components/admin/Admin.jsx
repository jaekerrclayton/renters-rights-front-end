import React, { useState, useEffect } from "react";
import axios from 'axios';
// import VolunteerList from "./VolunteerList";
import Volunteers from './VolunteerList'; 
import NewVolForm from "./NewVolForm";

export const URL='https://renters-rights-back-end.herokuapp.com/admin/';

function Admin() {
  const [volunteers, setVolunteers] = useState([]);
  const [volunteer, setVolunteer] = useState();
  const [schedules, setSchedules] = useState();
  const [numberOnline, setNumberOnline] = useState(0);

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
            schedule: volunteer.schedule
          };
        });
        console.log(newVolunteers);
        setVolunteers(newVolunteers);
        let count = 0;
        for (let volunteer of newVolunteers) {
          console.log(volunteer.status);
          if (volunteer.status === 'online') {
            count += 1;
          }
          setNumberOnline(count);
        }
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

  const addNewVol = (volunteerInfo) => {
    axios
      .post(URL + 'volunteers', volunteerInfo )
      .then((res) => {
        const newVolunteer = {
          "name": res.data.volunteers.name, 
          "email": res.data.volunteers.email, 
          "status" : res.data.volunteers.status, 
          "type": res.data.volunteers.type, 
          "language": res.data.volunteers.language, 
        }
        setVolunteers([...volunteers, newVolunteer]);
      })
      

  }


  // const getVolunteer = (volunteers) => {
  //   axios
  //     .get(URL + 'volunteers')
  //     .then((res) => {
  //       setVolunteer(res.data);
  //     });
    

  // }; 

  // const volunteer = ''
  // for (const volunteer of volunteers){
  //   let volunteer = 
  //     {volunteerId: volunteer.id}
    
  // };




  
  const v = (numberOnline !== 1 ? 'volunteers' : 'volunteer');

  return (
    <div>
        <h1>Volunteers</h1>
        <button onClick={getSchedules}>Get Schedules</button>

        <p>{Volunteers}</p>

        <h4>{numberOnline} {v} online now!</h4>
        <li>
          <Volunteers 
            volunteers={volunteers}
          /> 
        </li>
        <div>
              <NewVolForm onAddVolCallback={addNewVol}/> 
        </div>
          </div>


  );
}

export default Admin;

