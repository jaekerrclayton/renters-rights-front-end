import React from 'react';


const Defense = (props) => {
    console.log(props);
    let rights = props;
    if (props.props) {
        rights = props.props
    }
    return (
        rights.map((right) => (
            <div >
                <h1 >{right.Defense}</h1>
                <p>{right.Description}</p>
            </div>))
    );
}


export default Defense;