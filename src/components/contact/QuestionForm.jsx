import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row'
import emailjs, { init } from '@emailjs/browser';
init("Nuw2iJ96uZj1BoDyP");


const NewQuestion = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );

        e.target.reset();
    }
    
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Question</label>
                <Row>
                    <textarea name="message" rows={5} columns={5} placeholder="do NOT include identifying information"/>
                </Row>
                <input type="submit" value="Send" />
            </form>
        </div>
        );
};

export default NewQuestion;