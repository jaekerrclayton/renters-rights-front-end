import {
    useParams,
    useNavigate,
    useLocation,
    } from "react-router-dom";
import React, { useEffect, useState } from 'react';
// import typeDataJson from './type/evictionTypesData.json';
import './evictionType.css';


const Type = (typeDataJson) => {
    let { typeId } = useParams();
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        setTypeData(typeDataJson.find((type) => String(type.typeId) === typeId));
    }, [typeId])

    console.log(typeData);
    const rights = typeData['Renter Rights'];
    return (
        <main class='type' style={{ padding: "1rem" }}>
            <h2 class='type-title'>{typeData.Cause}</h2>
            <h4 class='type-description'>{typeData.Description}</h4>
            <div>
                <p>{typeData['Landlord Needs']}</p>
            </div>
            <h4>You may have a defense to eviction if any of the following apply:</h4>
            <div>
                {rights.map((right) => (
                    <div>
                        <h1>{right.Defense}</h1>
                        <p>{right.Description}</p>
                    </div>
                ) )}
            </div>
        </main>
    );
}