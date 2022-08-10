import React, { useEffect, useState } from 'react';
import URL from './Admin';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';

const ScheduleList = () => {
    const [schedules, setSchedules] = useState([{sunAm:[], sunPm:[], monAm:[], monPm:[], tueAm:[], tuePm:[], wedAm:[], wedPm:[], thuAm:[], thuPm:[], friAm:[], friPm:[], satAm:[], satPm:[]}]);

    useEffect(() => {
        axios.get('https://renters-rights-back-end.herokuapp.com/admin/schedules')
        .then((res) =>{
            let orderedSchedules = {
                sunAm:[], 
                sunPm:[], 
                monAm:[], 
                monPm:[],
                tueAm:[], 
                tuePm:[], 
                wedAm:[], 
                wedPm:[],
                thuAm:[],
                thuPm:[],
                friAm:[],
                friPm:[],
                satAm:[],
                satPm:[]
            };

            const newSchedules = res.data.map((schedule) => {
            if (schedule.sun === 'morning') {
                orderedSchedules.sunAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.sun === 'afternoon') {
                orderedSchedules.sunPm.push(schedule.volunteerBySchedule.name);
            }
            if (schedule.mon=== 'morning') {
                orderedSchedules.monAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.mon === 'afternoon') {
                orderedSchedules.monPm.push(schedule.volunteerBySchedule.name);
            }
            if (schedule.tue === 'morning') {
                orderedSchedules.tueAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.tue === 'afternoon') {
                orderedSchedules.tuePm.push(schedule.volunteerBySchedule.name);
            }
            if (schedule.wed === 'morning') {
                orderedSchedules.wedAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.wed === 'afternoon') {
                orderedSchedules.wedPm.push(schedule.volunteerBySchedule.name);
            }
            if (schedule.thu === 'morning') {
                orderedSchedules.thuAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.thu === 'afternoon') {
                orderedSchedules.thuPm.push(schedule.volunteerBySchedule.name);
            }
            if (schedule.fri === 'morning') {
                orderedSchedules.friAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.fri === 'afternoon') {
                orderedSchedules.friPm.push(schedule.volunteerBySchedule.name);
            }
            if (schedule.sat === 'morning') {
                orderedSchedules.satAm.push(schedule.volunteerBySchedule.name);
            } else if (schedule.sat === 'afternoon') {
                orderedSchedules.satPm.push(schedule.volunteerBySchedule.name);
            };
            return (
                orderedSchedules
            )})
            setSchedules(newSchedules)
            console.log(newSchedules);
            console.log(schedules);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const sunAmMap = schedules[0].sunAm.map((vol) =>
        <li>{vol}</li>
    );
    const sunPmMap = schedules[0].sunPm.map((vol) =>
        <li>{vol}</li>
    );
    const monAmMap = schedules[0].monAm.map((vol) =>
        <li>{vol}</li>
    );
    const monPmMap = schedules[0].monPm.map((vol) =>
        <li>{vol}</li>
    );
    const tueAmMap = schedules[0].tueAm.map((vol) =>
        <li>{vol}</li>
    );
    const tuePmMap = schedules[0].tuePm.map((vol) =>
        <li>{vol}</li>
    );
    const wedAmMap = schedules[0].wedAm.map((vol) =>
        <li>{vol}</li>
    );
    const wedPmMap = schedules[0].wedPm.map((vol) =>
        <li>{vol}</li>
    );
    const thuAmMap = schedules[0].thuAm.map((vol) =>
        <li>{vol}</li>
    );
    const thuPmMap = schedules[0].thuPm.map((vol) =>
        <li>{vol}</li>
    );
    const friAmMap = schedules[0].friAm.map((vol) =>
        <li>{vol}</li>
    );
    const friPmMap = schedules[0].friPm.map((vol) =>
        <li>{vol}</li>
    );
    const satAmMap = schedules[0].satAm.map((vol) =>
        <li>{vol}</li>
    );
    const satPmMap = schedules[0].satPm.map((vol) =>
        <li>{vol}</li>
    );
    return (
        <Accordion>
            <Accordion.Item eventKey='schedules'>
                <Accordion.Body>
                    <Accordion.Item eventKey='Sunday'>
                        <Accordion.Header>Sunday</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                <b>AM:</b> 
                                {sunAmMap}
                            </p>
                            <p>
                                <b>PM:</b> 
                                {sunPmMap}
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Monday'>
                        <Accordion.Header>Monday</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                <b>AM:</b>
                                <ul>
                                    {monAmMap}
                                </ul>
                            </p>
                            <p>
                                <b>PM:</b>
                                {monPmMap}
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Tuesday'>
                        <Accordion.Header>Tuesday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {tueAmMap}
                            <b>PM:</b> 
                            {tuePmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Wednesday'>
                        <Accordion.Header>Wednesday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {wedAmMap}
                            <b>PM:</b> 
                            {wedPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Thursday'>
                        <Accordion.Header>Thursday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {thuAmMap}
                            <b>PM:</b> 
                            {thuPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Friday'>
                        <Accordion.Header>Friday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {friAmMap}
                            <b>PM:</b> 
                            {friPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Saturday'>
                        <Accordion.Header>Saturday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {satAmMap}
                            <b>PM:</b> 
                            {satPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Sunday'>
                        <Accordion.Header>Sunday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {sunAmMap}
                            <b>PM:</b> 
                            {sunPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Monday'>
                        <Accordion.Header>Monday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {monAmMap}
                            <b>PM:</b>
                            {monPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Tuesday'>
                        <Accordion.Header>Tuesday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {tueAmMap}
                            <b>PM:</b> 
                            {tuePmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Wednesday'>
                        <Accordion.Header>Wednesday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {wedAmMap}
                            <b>PM:</b> 
                            {wedPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Thursday'>
                        <Accordion.Header>Thursday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {thuAmMap}
                            <b>PM:</b> 
                            {thuPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Friday'>
                        <Accordion.Header>Friday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {friAmMap}
                            <b>PM:</b> 
                            {friPmMap}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='Saturday'>
                        <Accordion.Header>Saturday</Accordion.Header>
                        <Accordion.Body>
                            <b>AM:</b> 
                            {satAmMap}
                            <b>PM:</b> 
                            {satPmMap}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

ScheduleList.propTypes =  {

    sun: PropTypes.string,
    mon: PropTypes.string,
    wed: PropTypes.string,
    thu: PropTypes.string,
    fri: PropTypes.string,
    sat: PropTypes.string


}

export default ScheduleList;