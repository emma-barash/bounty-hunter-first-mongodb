import React from 'react';
import { withBounty } from '../context/BountyProvider'
import {withForm} from '../context/FormProvider'

const ShowCharacters = (props) => {
    return (
        <div className="gridItem">
            <h2>{props.firstName} {props.lastName}</h2>
            <h3>Alive: {props.living.toString()}</h3>
            <h3>Bounty: ${props.bountyAmount}</h3>
            <h3>Type: {props.type}</h3>
            <button onClick={() => props.deleteBounty(props._id)}>Delete</button>
            <button onClick={() => {
                props.showForm(props._id)
                props.updateBountyToggle(props._id)
                }}>Update</button>
        </div>
    );
};

export default withForm(withBounty(ShowCharacters));

