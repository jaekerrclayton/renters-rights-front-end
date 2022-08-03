import React, { useState, useEffect } from "react";
import axios from 'axios';
// import VolunteerList from "./VolunteerList";
import Volunteers from './VolunteerList'; 
import NewVolForm from "./NewVolForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScheduleList from './ScheduleList';

export const URL='https://renters-rights-back-end.herokuapp.com/admin/';

function Admin() {
  const [volunteers, setVolunteers] = useState([]);
  const [volunteer, setVolunteer] = useState();
  const [schedules, setSchedules] = useState({'display':false, 'schedules':[{'sun-am':[], 'sun-pm':[], 'mon-am':[], 'mon-pm':[], 'tue-am':[], 'tue-pm':[], 'wed-am':[], 'wed-pm':[], 'thu-am':[], 'thu-pm':[], 'fri-am':[], 'fri-pm':[], 'sat-am':[], 'sat-pm':[]}]});
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
          // console.log(volunteer.status);
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
      let orderedSchedules = {
        'sun-am':[], 
        'sun-pm':[], 
        'mon-am':[], 
        'mon-pm':[],
        'tue-am':[], 
        'tue-pm':[], 
        'wed-am':[], 
        'wed-pm':[],
        'thu-am':[],
        'thu-pm':[],
        'fri-am':[],
        'fri-pm':[],
        'sat-am':[],
        'sat-pm':[]
      }
      const newSchedules = res.data.map((schedule) => {
        if (schedule.sun === 'morning') {
          orderedSchedules['sun-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.sun === 'afternoon') {
          orderedSchedules['sun-pm'].push(schedule.volunteerBySchedule.name);
        }
        if (schedule.mon=== 'morning') {
          orderedSchedules['mon-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.mon === 'afternoon') {
          orderedSchedules['mon-pm'].push(schedule.volunteerBySchedule.name);
        }
        if (schedule.tue === 'morning') {
          orderedSchedules['tue-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.tue === 'afternoon') {
          orderedSchedules['tue-pm'].push(schedule.volunteerBySchedule.name);
        }
        if (schedule.wed === 'morning') {
          orderedSchedules['wed-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.wed === 'afternoon') {
          orderedSchedules['wed-pm'].push(schedule.volunteerBySchedule.name);
        }
        if (schedule.thu === 'morning') {
          orderedSchedules['thu-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.thu === 'afternoon') {
          orderedSchedules['thu-pm'].push(schedule.volunteerBySchedule.name);
        }
        if (schedule.fri === 'morning') {
          orderedSchedules['fri-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.fri === 'afternoon') {
          orderedSchedules['fri-pm'].push(schedule.volunteerBySchedule.name);
        }
        if (schedule.sat === 'morning') {
          orderedSchedules['sat-am'].push(schedule.volunteerBySchedule.name);
        } else if (schedule.sat === 'afternoon') {
          orderedSchedules['sat-pm'].push(schedule.volunteerBySchedule.name);
        };
        console.log(orderedSchedules);
        return (
          orderedSchedules
        )
      })
    setSchedules({'schedules':newSchedules, 'display':!schedules.display})
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
  const scheduleButton = (schedules.display ? 'Hide' : 'Get');

  return (
    <section>
      <Row>
        <h1>Volunteers</h1>
      </Row>
        <Row>
          <Col><h4>{numberOnline} {v} online now!</h4></Col>
        <Row/>
      </Row>
      <Row>
        <Col>
            <Volunteers 
                volunteers={volunteers}/> 
        </Col>
        <Col>
          <Row>
          <Col><button onClick={getSchedules}>{scheduleButton} Schedules</button></Col>
          <div style={{display: schedules.display? '' : 'none'}}><ScheduleList props={schedules.schedules}/></div>
          </Row>
          <Row>
            <NewVolForm onAddVolCallback={addNewVol}/> 
          </Row>
        </Col>
      </Row>
    </section>


  );
}

export default Admin;

