import React from 'react';
import Container from 'react-bootstrap/Container';

const Volunteer = ({id, name, email, status, type, language}) => {
    return (
        <Container>
            <li>volunteer id: {id}</li>
            <li>name: {name}</li>
            <li>email: {email}</li>
            <li>status: {status}</li>
            <li>type: {type}</li>
            <li>language: {language}</li>
        </Container>
    )
}

export default Volunteer;