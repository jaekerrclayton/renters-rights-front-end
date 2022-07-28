import React from 'react';
import EvictionType from './evictionType';
import evictionTypesJson from './evictionTypesData.json';

export default function EvictionTypeList(types: any) {
    const getEvictionTypeListJSX = (evictTypes: any) => {
        return evictTypes.map((evictType: any) => {
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