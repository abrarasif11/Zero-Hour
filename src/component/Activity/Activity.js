import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Activity.css';

const Activity = () => {
    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        fetch('activity.json')
        .then(res=> res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='main-container'>
            <div className="activity-container">
                {
                    activities.map(activity => <Activities 
                    key={activity.id}
                    activity={activity}
                    ></Activities>)
                }
            </div>
            <div className="profile-container">
               <h3>Profile</h3>
            </div>
        </div>
    );
};

export default Activity;