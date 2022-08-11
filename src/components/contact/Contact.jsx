import React, {useState, useEffect}from "react";
import axios from 'axios';
import './contact.css'; 
import Row from 'react-bootstrap/Row';
import NewQuestion from "./QuestionForm";
import Posts from './Posts';
import ResourcesAbbr from "../resources/ResourceAbbr";
export const URL='https://renters-rights-back-end.herokuapp.com/admin/';


function Contact({resourceData, answeredQuestions}) {
  console.log(resourceData);
  console.log(answeredQuestions);
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

  // const v = (numberOnline !== 1 ? 'volunteers' : 'volunteer');

  return (
      <div id='contactInfo'>
        <Row>
          <h3>{answeredQuestions.title}</h3>
        </Row>
        <Row>
            <Posts answeredQuestions={answeredQuestions}/>
        </Row>
        <Row>
          <p>{answeredQuestions.instructions}</p>
        </Row>
        <Row id='questionBox'>
          <NewQuestion answeredQuestions={answeredQuestions} />
        </Row>
        <Row>
          <div>{answeredQuestions.urgent}</div>
          <h6 className='section_title'>{numberOnline} {answeredQuestions.current}</h6>
        </Row>
        <Row>
          <ResourcesAbbr resourceData={resourceData}/>
        </Row>
      </div>
  );
}

export default Contact;
