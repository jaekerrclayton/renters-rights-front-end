import {
    useParams
    } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import typeDataJson from '../data/english_data/evictionTypesData.json';
// import './evictionType.css';
import Defense from "./Defense";


const Type = (id) => {
    const [typeData, setTypeData] = useState({'renterRights':[]});
    let { typeId } = useParams();

    useEffect(() => {
        setTypeData(typeDataJson.find((type) => type.typeId === typeId));
    }, [typeId])

    console.log(typeData);
    console.log(typeData.renterRights);
    return (
        <main class='type' style={{ padding: "1rem" }}>
            <h2 class='type-title'>{typeData.cause}</h2>
            <h4 class='type-description'>{typeData.description}</h4>
            <div>
                <p>{typeData.landlordNeeds}</p>
            </div>
            <h4>You may have a defense to eviction if any of the following apply:</h4>
            <div>
                <Defense props={typeData.renterRights}/>
            </div>
        </main>
    );
}


export default Type;