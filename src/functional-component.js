import React from "react";
import './App.css';

function FunctionalComponent() {
    return (
        <div className="App">
            <Person name='Tom' age='32'/>
            <Person name='Sally' age='34'/>
        </div>
    );
}

const Person = (props) => {
    const {name, age} = props;
    return (
        <div>
            <h1>{name}</h1>
            <h2>Person Age: {age}</h2>
        </div>
    );
};

export default FunctionalComponent;