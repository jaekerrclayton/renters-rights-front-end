import React from 'react';
import EvictionType from './evictionType';
import evictionTypesJson from './evictionTypesData.json';

const EvictionTypes = (types) => {
    const getEvictionTypesJSX = (evictTypes) => {
        return evictTypes.map((evictType) => {
            return (
                <EvictionType
                    cause={evictType.cause}
                    description={evictType.description}
                    landlordProof={evictType["Landlord Needs"]}
                    renterRights={evictType["Renters Rights"]}
                />
            )
        })
    }
    return (
        <ul>
            {getEvictionTypeListJSX(types)}
        </ul>
    );
};

export default EvictionTypes;