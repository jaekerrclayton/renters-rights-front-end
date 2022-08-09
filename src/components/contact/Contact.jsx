import React, {useState, useEffect}from "react";
import axios from 'axios';
import './blog.css'; 
import Row from 'react-bootstrap/Row';
import NewQuestion from "./QuestionForm";


export const URL='https://renters-rights-back-end.herokuapp.com/admin/';


function Contact() {
  const [numberOnline, setNumberOnline] = useState(0);


  useEffect(() => {
    axios 
      .get(URL + 'volunteers')
      .then((res) =>{
        // console.log(res.data);
        let count = 0;
        res.data.map((volunteer) => {
          if (volunteer.status === 'online') {
            count += 1;
          }
          return count;
          });
          setNumberOnline(count);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const v = (numberOnline !== 1 ? 'volunteers' : 'volunteer');

  return (
      <div>
        <Row>
          <h3>Contact Us</h3>
        </Row>
        <Row>
          <h6>Frequently Asked Questions</h6>
        </Row>
        <Row>
          <p>If you have a question that is not covered in the FAQ, you can submit a question anonymously in the form below. Answers to questions are posted on Tuesdays.</p>
        </Row>
        <Row>
          <NewQuestion />
        </Row>
        <Row>
          <p>For URGENT questions, you can call (or text?) the hotline at <h5>555-5555</h5> </p>
          <h6 className='section_title'>We have {numberOnline} {v} currently available to speak with you.</h6>
        </Row>
        <Row>
          <p>link to legal aid (all resources -> auto generate legal aid first resources)</p>
        </Row>
      </div>
  );
}

export default Contact;
