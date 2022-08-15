import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'; 


const NewVolunteer = ({translations}) => {
    console.log(translations);
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
        <Container style={{ width: '50rem' }}  >
            <p>
                <h4>{translations.apply}</h4>
            </p>
            <Alert className="text-box" variant="success">
                    <form ref={form} onSubmit={sendEmail} className="volunteerForm">
                        <Row>
                            <label>{translations.name}:</label>
                            <input type="text" name="user_name" />
                        </Row>
                        <Row>
                            <label>{translations.email}:</label>
                            <input type="email" name="user_email" />
                        </Row>
                        <Row>
                            <label>{translations.info}</label>
                            <textarea rows={5} columns={5} name="message" />
                        </Row>
                        <input className="button" type="submit" value={translations.send} />
                    </form>
            </Alert>
        </Container>
    );
};

export default NewVolunteer;