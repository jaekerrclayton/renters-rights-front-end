import React from "react";
// import answeredQuestions from "../data/english_data/answeredQuestions.json";
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row'

function Posts({answeredQuestions}) {
  const getPosts = answeredQuestions.answers.map((question) => {
      console.log(question);
      return(
        <Accordion.Item eventKey={question.q_id}>
          <Accordion.Header>{question.Question}</Accordion.Header>
          <Accordion.Body>
            {question.Answer}
          </Accordion.Body>
        </Accordion.Item>
      )
    });

  return (
    <div>

              <Accordion>
                {getPosts}
              </Accordion>
       

    </div>
  );
}

export default Posts;
