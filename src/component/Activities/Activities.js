import React from 'react';
import './Activities.css';

const Activities = (props) => {
    const {picture, time, name, age} = props.activity;
    return (
        <div className='activities'>
            <div>
            <img src={picture} alt="" />
            <h4 className='activities-name'>{name}</h4>
            <p className='activities-age'>Age : {age}</p>
            <p className='activities-time'>Time : {time}</p>
            </div>
            <button onClick={() => props.handleClick(props.activity)} className='btn'>Add to List</button>
            </div>
    );
};

export default Activities;