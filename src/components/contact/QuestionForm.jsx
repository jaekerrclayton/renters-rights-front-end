import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const NewQuestion = ({onAddQuestionCallback}) => {
    const [questionData, setQuestionData] = useState({message:''});

    const handleChange = (e) => {
        questionData['message'] = e.target.value
    };

    const submitQuestion = (e) => {
        onAddQuestionCallback(questionData);
    };

    return (
        <Form onSubmit={submitQuestion}>
            <Row>
            <h5>Submit a Question</h5>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="" controlId="input">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Please do NOT include identifying information." onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
                <button className="button-new-board-submit" type="submit">
                Submit Question 
                </button>
    </Form>
    );
};


export default NewQuestion;