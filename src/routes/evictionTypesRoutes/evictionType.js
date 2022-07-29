import {
    useParams,
    useNavigate,
    useLocation,
    } from "react-router-dom";
import React from 'react';
import { getType } from '../../EvictionTypeData';
import './evictionType.css';

export default function EvictionType() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let type = getType(parseInt(params.typeId, 10));

    return (
        <main class='type' style={{ padding: "1rem" }}>
            <h2 class='type-title'>{type.cause}</h2>
            <h4 class='type-description'>{type.description}</h4>
            <div>
                <p>{type.landlordNeeds}</p>
            </div>
            <h4>You may have a defense to eviction if any of the following apply:</h4>
                <p>{type.rentersRights}</p>
        </main>
    );
}