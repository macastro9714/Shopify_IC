import './styles/index.css';

import LandingPage from '@components/LandingPage';
import { history, store } from '@store';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default App;
