import React, { useEffect, useState } from 'react';
import SelectedMember from '../SelectedMember/SelectedMember';
import SingleMember from '../SingleMember/SingleMember';
import './Club.css'

const Club = () => {
    const [members, setMembers]=useState([])
    const[selectedMember, setSelectedMember]=useState([])
    useEffect(()=>{
        fetch('./members.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])

    const handleAddMember=(member)=>{
        const newSelectedMember=[...selectedMember,member]
        setSelectedMember(newSelectedMember)
    }

    return (
        <div>
           <div className="club-container row">
           <div className="single-member col-9">
               <div className="row">
               {
                    members.map(member=><SingleMember
                    // key={member.key}
                    // name={member.name}
                    // image={member.image}
                    key={member.key}
                    member={member}
                    handleAddMember={handleAddMember}
                    >
                    </SingleMember>)
                }  
               </div> 
           </div>
           <div className="selected-member col-3">
           
           <SelectedMember selectedMember={selectedMember}></SelectedMember>
           </div>
              
           </div>
        </div>
    );
};

export default Club;