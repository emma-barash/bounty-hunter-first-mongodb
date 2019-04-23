import React, { Component } from 'react';
import axios from 'axios'

class DisplayBounty extends Component {
    // constructor(){
    //     super();
    //     this.state = {

    //     }
    // }
    componentDidMount(){
        axios.get('/bounty').then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default DisplayBounty;