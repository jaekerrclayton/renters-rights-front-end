import React, { useState, useEffect } from "react";
import axios from 'axios';
import Volunteers from './VolunteerList'; 
import NewVolForm from "./NewVolForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScheduleList from './ScheduleList';
import ScheduleChangeDropDown from "./ScheduleChangeDropdown";

export const URL='https://renters-rights-back-end.herokuapp.com/admin/';

function Admin() {
  const [volunteers, setVolunteers] = useState([]);
  const [schedules, setSchedules] = useState({'display':false, 'schedules':[{'sun-am':[], 'sun-pm':[], 'mon-am':[], 'mon-pm':[], 'tue-am':[], 'tue-pm':[], 'wed-am':[], 'wed-pm':[], 'thu-am':[], 'thu-pm':[], 'fri-am':[], 'fri-pm':[], 'sat-am':[], 'sat-pm':[]}]});
  const [numberOnline, setNumberOnline] = useState(0);


  useEffect(() => {
    axios 
      .get(URL + 'volunteers')
      .then((res) =>{
        // console.log(res.data);
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
        setVolunteers(newVolunteers);
        let count = 0;
        for (let volunteer of newVolunteers) {
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
        console.log(res.data);
        const newVolunteer = {
          "name": res.data.name, 
          "email": res.data.email, 
          "type": res.data.type, 
          "language": res.data.language, 
          "schedule": res.data.schedule
        }
        setVolunteers([...volunteers, newVolunteer]);
      })
  };

  const changeStatus = (id, status) => {
    console.log(id);
    const updatedVolunteers = volunteers.map((volunteer) => {
      if (volunteer.volunteerId === id) {
        console.log('call made');
        if (status.status === 'online') {
          setNumberOnline(numberOnline + 1);
        } else {
          setNumberOnline(numberOnline -1);
        }
        volunteer.status = status.status;
        }
      return volunteer;
      })
    axios
      .patch(URL + 'volunteers/' + id, status)
      .then(() => {
        setVolunteers(updatedVolunteers);
        console.log(volunteers);
    })
  };

  const editVol = (volunteerInfo) => {
    console.log(volunteerInfo);
    console.log(volunteerInfo.volunteerId);
    const updatedVolunteer = {
      'name': volunteerInfo.name,
      'email' : volunteerInfo.email,
      'type' : volunteerInfo.type,
      'language': volunteerInfo.language
    }
    axios
      .put(URL + 'volunteers/' + volunteerInfo.volunteerId, updatedVolunteer)
      .then(() => {
        const updatedVolunteers = volunteers.map((volunteer) => {
          if (volunteer.volunteerId === volunteerInfo.volunteerId) {
            volunteer.name = volunteerInfo.name;
            volunteer.email = volunteerInfo.email;
            volunteer.type = volunteerInfo.type;
            volunteer.language = volunteerInfo.language;
          };
        return volunteer;
      })
      setVolunteers(updatedVolunteers);})
      .catch((err) => console.log(err));
    }

  const deleteVol = (id) => {
    axios
      .delete(URL + 'volunteers/' + id)
      .then(() => {
        const afterDelete = volunteers.filter((volunteer) => volunteer.volunteerId !== id);
        setVolunteers(afterDelete);
        })
  }

  const changeSched = (id, schedule) => {
    axios
      .put(URL + 'volunteers/' + id + '/schedules', schedule)
      .then(() => {
        const updatedVolSchedules = volunteers.map((volunteer) => {
          if (volunteer.volunteerID === id) {
            volunteer.schedule = schedule;
          }
          return volunteer;
        })
        setVolunteers(updatedVolSchedules);
        getSchedules();
      })
  };

  const v = (numberOnline !== 1 ? 'volunteers' : 'volunteer');

  return (
    <section>
        <Row>
          <Col><h4 className='section_title'>{numberOnline} {v} online now!</h4></Col>
        <Row/>
      </Row>
      <Row>
      <Col>
          <Row>
            <h4>Volunteers</h4>
          </Row>
          <Row>
          <Volunteers 
                volunteers={volunteers}
                onEdit={editVol}
                onDelete={deleteVol}
                changeStatus={changeStatus}
          />
          </Row>
          <Row>
            <NewVolForm onAddVolCallback={addNewVol}/> 
          </Row>
        </Col>
        <Col>
          <Row>
            <h4>Schedules</h4>
          </Row>
          <Row>
            <ScheduleList />
          </Row>
          <Row>
            <ScheduleChangeDropDown className='section_title' volunteers={volunteers} changeSchedule={changeSched}/>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default Admin;

