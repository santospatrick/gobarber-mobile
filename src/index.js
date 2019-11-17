import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/reactotron';

import Routes from 'routes';
import { store, persistor } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            </PersistGate>
            <Routes />
        </Provider>
    );
};

export default App;
