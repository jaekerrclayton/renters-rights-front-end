import React, { useState, useEffect } from "react";
import axios from 'axios';

export const REACT_APP_BACKEND_URL='https://renters-rights-back-end.herokuapp.com/admin/';

function Contact() {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    axios 
      .get(REACT_APP_BACKEND_URL + 'volunteers')
      .then((res) =>{
        console.log(res.data);
        const newVolunteers = res.data.map((volunteer) => {
          return {
            volunteer_id: volunteer.volunteerId,
            name: volunteer.name,
            email: volunteer.email,
            status: volunteer.status,
            type: volunteer.type,
            language: volunteer.language
          };
        });
        setVolunteers(newVolunteers);
        console.log(newVolunteers);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  
  return (
    <div>
      <h1>Volunteers</h1>
      <ul>{volunteers}</ul>
    </div>
  );
}

export default Contact;

