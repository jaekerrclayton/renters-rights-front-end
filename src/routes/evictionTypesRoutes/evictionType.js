import React from 'react';
import './evictionTypesData.json'
import evictionTypesJson from './evictionTypesData.json';

const EvictionType = (CauseProps) => {
    return (
        <span>
            <h2> {CauseProps.title}</h2>
            <p>{CauseProps.description}</p>
            <h2> To legally ask you to vacate, your landlord must provide evidence that: </h2>
            <ul>
                {CauseProps.landlordProof}
            </ul>
            <h2>You may have a defense to eviction if one of the following apply:</h2>
            <ul>
                {CauseProps.renterRights}
            </ul>
        </span>
    );
};

export default EvictionType;