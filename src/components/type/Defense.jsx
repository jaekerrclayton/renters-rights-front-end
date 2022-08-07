import React from 'react';


const Defense = (props) => {
    console.log(props.props);
    return (
        props.props.map((right) => (
            <div>
                <h1>{right.Defense}</h1>
                <p>{right.Description}</p>
            </div>))
    );
}


export default Defense;