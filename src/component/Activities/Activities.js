import React from 'react';
import './Activities.css';

const Activities = (props) => {
    const {picture, time, name, age} = props.activity
    return (
        <div className='activities'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Age : {age}</p>
            <p>Time {time}</p>
        </div>
    );
};

export default Activities;