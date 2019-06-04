import React from 'react';
import { withForm } from '../../context/FormProvider'
import { withBounty } from '../../context/BountyProvider'

const AddBountyForm = props => {
    return (
        <div className={`form-${props.theme}`}>
            <div className="inputs">
        <form onSubmit={props.onSubmit}>
          <p>First Name:</p>
          <input
            name="firstName"
            onChange={props.onChange}
            value={
              props.firstName}
          />
          <p>Last Name:</p>
          <input
            name="lastName"
            onChange={props.onChange}
            value={
              props.lastName}
          />
          <p>Is Alive?</p>
          <input
            name="living"
            onChange={props.onChange}
            value={props.living} 
          />
          <p>Reward Amount:</p>
          <input
            name="bountyAmount"
            onChange={props.onChange}
            value={
              props.bountyAmount}
          />
          <p>Type</p>
          <input
            name="type"
            onChange={props.onChange}
            value={props.type}
          />
          <br />
          <button className="enterBounty">{props.bountyUpdate ? 'Update' : 'Enter'} Bounty</button>
          {
            props.bountyUpdate && <button className="enterBounty">Cancel</button>
          }
        </form>
      </div>
        </div>
    );
};

export default withBounty(withForm(AddBountyForm));