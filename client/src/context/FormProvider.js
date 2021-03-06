import React, { Component } from 'react';
export const {Consumer, Provider} = React.createContext();

class FormProvider extends Component {
    constructor(){
        super();
        this.state = {
            theme: 'hide'
        }
    }
    showForm = (id) => {
        if(id){
            return this.setState({theme: 'show'})
        }
        this.setState(ps => {
          return {
              theme: ps.theme === 'show' ? 'hide' : 'show'
          } 
        })
    }
    render() {
        const props = {
            ...this.state,
            showForm: this.showForm
        }
        return (
            <Provider value={props}>
                {this.props.children}
            </Provider>
        );
    }
}
export const withForm = C => props => {
    return(
        <Consumer>
            {value => <C {...value} {...props} />}
        </Consumer>
    )
}

export default FormProvider;