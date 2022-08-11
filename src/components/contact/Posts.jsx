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
      <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src=""
                alt=""
              />
            </div>
            <Row>
              <h1 class="font-weight-light">{answeredQuestions.FAQ}</h1>
            </Row>
            <Row>
              <Accordion>
                {getPosts}
              </Accordion>
            </Row>
          </div>
      </div>
    </div>
  );
}

export default Posts;
