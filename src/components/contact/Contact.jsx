import React, {useState, useEffect}from "react";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; 
import NewQuestion from "./QuestionForm";
import Posts from './Posts';
import ResourcesAbbr from "../resources/ResourceAbbr";
import Alert from 'react-bootstrap/Alert'; 
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
    <main>

    <Container>

      <Alert className="text-box" variant="success">
        <Alert.Heading>{answeredQuestions.FAQ}</Alert.Heading>

        <hr />
        <h6 className='section_title'>{numberOnline} {answeredQuestions.current}</h6>
        <p>{answeredQuestions.urgent}</p>
      <hr />
        <p style={{
                        maxHeight: 'calc(75vh - 210px)',
                        overflowY: 'auto'
                    }}>
              <Posts answeredQuestions={answeredQuestions}/>

        </p>
      </Alert> 
    
          
      </Container>

      <ResourcesAbbr resourceData={resourceData}/>

      <Container>
      <Alert id='questionBox' className="text-box" variant="success">
      <p>{answeredQuestions.instructions}</p>
      <p id='questionBox' 
                        // overflowY: 'auto'
                  >
      <NewQuestion answeredQuestions={answeredQuestions} />

      </p>
      </Alert>
      </Container>
     
    </main> 
  );
}

export default Contact;
