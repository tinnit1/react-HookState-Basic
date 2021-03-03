import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({numero = 10}) => {

    const [counter, setCounter] = useState(numero); // return array with ywo values [value, function()]
    // handleAdd

    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter( (c) => c + 1);
    };
    const handleReset = () => {
        // setCounter(10);
        setCounter( (c) => 10);
    };
    const handleSubstract = () => {
        // setCounter(counter - 1);
        setCounter( (c) => c - 1);
    };
    return (
        <>
            <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}>1+</button>
            <button onClick={handleReset}>1Reset</button>
            <button onClick={handleSubstract}>1-</button>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number
}

export default CounterApp;