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
               <img src="" alt="" />
               <h4 className='profile-text'>Pintu Islam</h4>
               <p className='profile-text'>Location : Dhaka,Bangladesh</p>
               <div className='info'>
                <h6 className='weight'>75 KG</h6>
                <p className='weight'>Weight</p>
                <h6 className='height'>6.1</h6>
                <p >Height</p>
                <h6 className='age'>21 Years</h6>
                <p >Age</p>
               </div>
                <h5 className='break-text'>Add a Break</h5>
               <div className='break'>
                <button className='s10'>10s</button>
                <button className='s20'>20s</button>
                <button className='s30'>30s</button>
                <button className='s40'>40s</button>
               </div>
               <h5 class='text-center mt-5 pt-4 mb-4'>Activity Details</h5>
               <div>

               <h6 className='activity-time'>Activity Time : 00Seconds</h6>
               <h6 className='break-time'>Break Time : 00Seconds</h6>
               </div>
               <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Activity;