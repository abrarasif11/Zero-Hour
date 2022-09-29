import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Profile from '../Header/Profile/Profile';
import './Activity.css';

const Activity = () => {
    const [activities, setActivities] = useState([]);
    

    useEffect(()=>{
        fetch('activity.json')
        .then(res=> res.json())
        .then(data => setActivities(data))
    },[]);
    const [activeObj, setActiveObj] = useState([]);
    const handleClick = (activity) =>{
        // console.log(activity);
        const newTime = [...activeObj, activity]
        setActiveObj(newTime);
      }
    return (
        <div className='main-container'>
            <div className="activity-container">
                {
                    activities.map(activity => <Activities 
                    key={activity.id}
                    activity={activity}
                    handleClick={handleClick}
                    ></Activities>)
                }
            </div>
            <div className="profile-container">
            <Profile activeObj={activeObj}></Profile>
            </div>
        </div>
    );
};

export default Activity;