import React, { Component } from "react";
import { withBounty } from "../../context/BountyProvider";
import AddBountyForm from "./AddBountyForm";

class AddBounty extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      living: "",
      bountyAmount: "",
      type: ""
    };
  }
  
  stateForUpdate = (toUpdateBounty) => {
    this.setState(toUpdateBounty)
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
        [name]: value,
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.bountyUpdate){
      this.createBounty()
    }else {
      this.updateBounty(this.props.bountyUpdate)
    }
  }

  createBounty = () => {
  const data = this.state;
  delete data._id
    const newState = {
      firstName: "",
      lastName: "",
      living: "",
      bountyAmount: "",
      type: ""
    }
    this.props.postBounty(data)
    this.setState(newState)
  }

  updateBounty = (_id) => {
  const data = {...this.state, _id: _id};
    const newState = {
      firstName: "",
      lastName: "",
      living: "",
      bountyAmount: "",
      type: ""
    }
    this.props.updateBounty(data)
    this.setState(newState)
    this.props.updateBountyToggle()
  }

  componentDidUpdate(prevProps){
    if (prevProps.updateData._id !== this.props.updateData._id && this.state.firstName === ""){
      this.stateForUpdate(this.props.updateData)
    }
  }

  render() {
    
    return (
      <div>
          <AddBountyForm  onSubmit={this.handleSubmit} onChange={this.handleChange} {...this.state}/>
      </div>
    );
  }
}

export default withBounty(AddBounty);
