import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayBounty from './components/DisplayBounty';
import { withForm } from './context/FormProvider'
import './styles/App.css'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={(rProps) => <DisplayBounty {...rProps} />}/>
            </Switch>
        </div>
    );
};

export default withForm(App);