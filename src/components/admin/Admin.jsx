import React, { useState, useEffect } from "react";
import axios from 'axios';
// import VolunteerList from "./VolunteerList";
import Volunteers from './VolunteerList'; 
import NewVolForm from "./NewVolForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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


  
  const v = (numberOnline !== 1 ? 'volunteers' : 'volunteer');

  return (
    <section>
      <Row>
        <h1>Volunteers</h1>
      </Row>
        <Row>
          <Col><button onClick={getSchedules}>Get Schedules</button></Col>
          <Col><h4>{numberOnline} {v} online now!</h4></Col>
        <Row/>
      </Row>
      <Row>
        <Col>
            <Volunteers 
                volunteers={volunteers}/> 
        </Col>
        <Col>
            <NewVolForm onAddVolCallback={addNewVol}/> 
        </Col>
      </Row>
    </section>


  );
}

export default Admin;

