import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div>
            <h2 class="text-center mt-5">Questions Answer Part</h2>
           <div className="question-container">
           <ul>
            <li>
                <h2>How Does React Works?</h2>
            </li>
            <h6>Ans : React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</h6>
           </ul>
           <ul>
            <br />
            <li>
                <h2>What is the difference between props and state?</h2>
                <h6>Ans : </h6> 
                   <h6> Props - </h6>
                    <h6> Data passed one to another component.</h6>
                <h6>It cannot be modified.</h6>
                <h6>Props are read only</h6>
                <br />
                <h6>State -</h6>
                <h6>Data pass within the component only.</h6>
                <h6>It can be modified.</h6>
                <h6>State is both read and write.</h6>
            </li>
           </ul>
           <br />
           <ul>
            <li>
                <h6>How many actions can be done by useEffect hook except fetching data?</h6>
                <h6>Ans : </h6>
            </li>
           </ul>
           </div>
        </div>
    );
};

export default Questions;