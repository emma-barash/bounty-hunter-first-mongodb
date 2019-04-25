import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BountyProvider from './context/BountyProvider'
import FormProvider from './context/FormProvider'
export const { Consumer, Provider } = React.createContext();

ReactDOM.render(
    <BrowserRouter>
        <FormProvider>
            <BountyProvider>
                <App/>
            </BountyProvider>
        </FormProvider>
    </BrowserRouter>,
    document.getElementById('root')
)