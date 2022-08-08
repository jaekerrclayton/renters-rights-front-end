import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import typeDataJson from './evictionTypesData.json';
import Defense from './Defense';

const TypesAbbr = () => {
    let types = typeDataJson;
    const [currentType, setCurrentType] = useState({'renterRights':[]});
    const [displayTypes, setDisplayTypes] = useState({1:false, 2:false, 3:false, 4:false});

    const displayType = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setDisplayTypes({1:false, 2:false, 3:false, 4:false});
        displayTypes[e.target.value] = true;
        setCurrentType(types.find((type) => type.typeId === e.target.value));
    }

    const rights = currentType.renterRights.map((right) => (
        <div>
            <b>You may have a defense to eviction if any of the following apply:</b>
            <h4>{right.Defense}</h4>
            <p>{right.Description}</p>
        </div>))

    return (
        <main>
        <h2>Causes for Eviction</h2>
        {/* <div style={{ display: "flex "}}> */}
        <Row>
            {/* <nav style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}
            > */}
                {types
                    .map((type) => ( 
                        <button value={type.typeId} onClick={displayType}>
                            {type.cause}
                        </button>
                    ))}
            {/* </nav> */}
        </Row>
        <Row>
            <div>
                <p style={{display: displayTypes[1] ? 'none': ''}}>
                    <main class='type' style={{ padding: "1rem" }}>
                        <h4 class='type-title'>{currentType.cause}</h4>
                        <h6 class='type-description'>{currentType.description}</h6>
                        <div>
                            <p>{currentType.landlordNeeds}</p>
                        </div>
                        <div>
                            {rights}
                        </div>
                    </main>
                </p>
                {/* <p style={{display: displayTypes[2] ? 'none': ''}}> <Type /></p>
                <p style={{display: displayTypes[3] ? 'none': ''}}> <Type /></p>
                <p style={{display: displayTypes[4] ? 'none': ''}}> <Type /></p> */}
            </div>
        </Row>
    {/* </div> */}
    </main>
    );
}

export default TypesAbbr;