import React from 'react';

const Activities = (props) => {
    const {picture, time, name, age} = props.activity
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Age : {age}</p>
            <p>Time {time}</p>
        </div>
    );
};

export default Activities;