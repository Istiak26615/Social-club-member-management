import React from 'react';
import './SelectedMember.css'

const SelectedMember = (props) => {
    const {selectedMember}= props;
    let total=0;
    let selectedNames=[]
    for(const member of selectedMember){
        total=total+member.salary
        selectedNames.push(member.name)   
    }
    return (
        <div className="selected-member-card">
            <h4>Total selected members:{props.selectedMember.length}</h4>
            <h4>Total cost:{total}</h4>
            {/* <h4>names:{selectedNames}</h4>
            <i class="fas fa-user-alt"></i> */}
            
            <br/>
           <h4>Selected Members List:</h4>
            {
                selectedNames.map(names=><li>{names}</li>)
            }
            
            
            
        </div>
    );
};

export default SelectedMember;