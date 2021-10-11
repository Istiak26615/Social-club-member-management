import React from 'react';
import './SingleMember.css'

const SingleMember = (props) => {
    // console.log('clicked')
    const {key, image, name,age,salary,talent }=props.member
    return (
        <div className=" single-member-card col-md-3">      
            <img src={image} className="card-img-top" alt="..."/>
            <div className="member-elements">
            <p>ID:{key}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Salary: {salary}</p>
            <p>Talent: {talent}</p>
            </div>
            <br/>
            <button onClick={()=>props.handleAddMember(props.member)} className="fas fa-check-circle btn btn-success">  Select Member</button><br/>    
            <i class="fab fa-facebook-square"></i> 
            <i class="fab fa-twitter-square"></i>
            
           
        </div>
    );
};

export default SingleMember;