import { Consumer, Provider } from "../index";
import React, { Component } from "react";
import axios from "axios";

class BountyProvider extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      bountyUpdate: ""
    };
  }

  getBounty = () => {
    axios
      .get("/bounty")
      .then(res => {
        const data = res.data;
        this.setState({ characters: data })
      })
      .catch(err => console.log(err.response.data.errMsg));
  };

  postBounty = data => {
    axios.post("/bounty", data).then(res => {
        this.getBounty()
      console.log(res.status);
    });
  };
  deleteBounty = data => {
    axios.delete(`/bounty/${data}`);
    const deleteCharacters = this.state.characters.filter(
      bounty => bounty._id !== data
    );
    this.setState({ characters: deleteCharacters });
  };

  updateBountyToggle = id => {
    this.setState(ps => {
      return {
        bountyUpdate: ps.bountyUpdate ? "" : id
      };
    });
  };

  populateForm = id => {
    const charUpdate = this.state.characters.find(bounty => bounty._id === id);
    if (charUpdate) {
      this.setState({ charToUpdate: charUpdate });
    }
  };

  updateBounty = data => {
    axios.put(`/bounty/${data._id}`, data)
    .then(res => {
        this.getBounty()
    })
  };

  render() {
    const updateData = () => {
      if (this.state.bountyUpdate && this.state.characters.length) {
        const bounty = this.state.characters.find(bounty => {
          return bounty._id === this.state.bountyUpdate;
        });
        // console.log(bounty);
        return bounty;
      }
      return {message: "whatever"};
    };

    const props = {
      ...this.state,
      getBounty: this.getBounty,
      deleteBounty: this.deleteBounty,
      postBounty: this.postBounty,
      updateBounty: this.updateBounty,
      updateBountyToggle: this.updateBountyToggle,
      updateData: updateData()
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withBounty = C => props => {
  return <Consumer>{value => <C {...props} {...value} />}</Consumer>;
};

export default BountyProvider;
