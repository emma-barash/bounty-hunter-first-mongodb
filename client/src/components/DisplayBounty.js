import React from 'react';
import { withBounty } from '../context/BountyProvider'
import { withForm } from '../context/FormProvider'
import ShowCharacters from './ShowCharacters';
import AddBounty from './AddingBounty/AddBounty'


const DisplayBounty = (props) => {
const {getBounty, characters } = props
    return (
        <div className="landContainer">
        <h1>Bounty Hunter</h1>
        <div className="landContent">
            <button onClick={getBounty} className="landButton">Get Bounty List</button>
            <button className="landButton" onClick={() => props.showForm()}>{props.theme === 'hide' ? 'Add Bounty' : 'Hide Form'}</button>
         </div>
         <AddBounty />
        <div className="contentContainer">
            {characters.map((character, i) => <ShowCharacters {...character} key={i}/>)}
        </div>
        
        </div>
    );
};

export default withForm(withBounty(DisplayBounty));