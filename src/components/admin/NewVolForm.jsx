import React, { useState } from 'react';
import PropTypes from 'prop-types';




const kNewVolData = {
    name: '',
    email: '',
    status: '', 
    type: '',
    language: '',
    // schedule: {}

};



const NewVolForm = ({onAddVolCallback}) => {
    const [volunteerData, setVolunteerData] = useState(kNewVolData); 


    const handleChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

    
        setVolunteerData(oldData => ({ ...oldData, [fieldName]: value }));
    };



    const submitVolunteerData = (e) => {
    
        e.preventDefault();
    
        // if (!boardData.title) { return; }
    
        // reset the form back to its default values. This won't affect the value
        // of taskData until React re-renders, so we are still free to use it in
        // the remainder of this function
        setVolunteerData(kNewVolData);



        onAddVolCallback(volunteerData);
    };


    return (
    <form onSubmit={submitVolunteerData}>
        <section>
            <h2>Add a new volunteer</h2>
            <div className="new-card-fields">
                <label htmlFor="name">Name:</label>
                <input
                name="name"
                id="name"
                value={volunteerData.name}
                onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                name="email"
                id="email"
                value={volunteerData.email}
                onChange={handleChange}
                />
                <label htmlFor="email">Online Status</label>
                <input
                name="status"
                id="status"
                value={volunteerData.status}
                onChange={handleChange}
                />
                <label htmlFor="type">Type of Volunteer</label>
                <input
                name="type"
                id="type"
                value={volunteerData.type}
                onChange={handleChange}
                />
                <label htmlFor="language">Languages Spoken</label>
                <input
                name="language"
                id="language"
                value={volunteerData.languages}
                onChange={handleChange}
                />
                <button className="button-new-board-submit" type="submit">
                Add New Volunteer 
                </button>
            </div>
        </section>
    </form>
    );
};

NewVolForm.propTypes = {
    onAddVolCallback: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,

};


export default NewVolForm;