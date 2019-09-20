import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Screens //
import LoadingScreen from 'screens/LoadingScreen';

// Redux //
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthed } from 'data/auth/selectors';

const AuthedRoute = ({ component: Component, isAuthed, loading, queueSnackbar, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (loading) {
                    return <LoadingScreen />;
                }

                if (!isAuthed) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { conferenceAlias: props.match.params.conferenceAlias },
                            }}
                        />
                    );
                }
                return <Component {...props} />;
            }}
        />
    );
};

const mapStateToProps = createStructuredSelector({
    isAuthed: makeSelectIsAuthed(),
});

export default connect(mapStateToProps)(AuthedRoute);
