import React from 'react';

const Profile = (props) => {
    const  {activeObj} = props
    let totalTime = 0;
    for(const activity of activeObj){
        // console.log(time);
        totalTime = totalTime + activity.time;
    } 
    return (
        <div >
            
            <h4 className='profile-text'>Pintu Islam</h4>
               <h6 class="text-center">Student</h6>
               <p className='profile-text'>Location : Dhaka,Bangladesh</p>
               <div className='info'>
                <h6 className='weight'>80KG Weight</h6>
                <h6 className='height'>6.1 Height</h6>
                
                <h6 className='age'>21Years Age</h6>
                
               </div>
                <h5 className='break-text'>Add a Break</h5>
               <div className='break'>
                <button className='s10'>10m</button>
                <button className='s20'>20m</button>
                <button className='s30'>30m</button>
                <button className='s40'>40m</button>
               </div>
               <h5 class='text-center mt-5 pt-4 mb-4'>Activity Details</h5>
               <div>

               <h6 className='activity-time'>Activity Time : {totalTime} Minitues</h6>
               <h6 className='break-time'>Break Time :  Minitues</h6>
               </div>
               <button className='activity-btn'>Activity Completed</button>
        </div>
            
        
    );
}; 

export default Profile;