import React from 'react';

// Router //
import { Router, Switch, Route } from 'react-router-dom';
import history from 'utils/history';

// Styles //
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';
import '@voxeet/react-components/dist/voxeet-react-components.css'; // Can you be customize, refer to https://github.com/voxeet/voxeet-assets-react-components

// Screens //
import Conference from 'screens/Conference';
import Login from 'screens/Login';

// Containers //
import AuthedRoute from 'containers/AuthedRoute';
import Snackbar from 'containers/Snackbar';

// Redux //
import { Provider } from 'react-redux';
import createStore from 'data/createStore';

const store = createStore();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    <>
                        <Switch>
                            <AuthedRoute path='/:conferenceAlias' component={Conference} />
                            <Route path='/' component={Login} />
                        </Switch>
                        <GlobalStyles />
                        <Snackbar />
                    </>
                </Router>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
