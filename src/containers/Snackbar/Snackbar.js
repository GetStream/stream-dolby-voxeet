import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// Utils //
import Portal from 'utils/Portal';

// Actions //
import { dismissSnackbar } from './actions';

// Components //
import * as snackbars from './snackbars';
import { makeSelectSnackbarData, makeSelectShowSnackbar, makeSelectSnackbarType } from './selectors';

const Root = styled(Animated.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 32px;
    left: 32px;
    z-index: ${({ theme }) => theme.z.snackbar};
`;

class Snackbar extends Component {
    anim = new Animated.Value(0);

    static propTypes = {
        color: PropTypes.string,
        data: PropTypes.object,
        show: PropTypes.bool,
    };

    static defaultProps = {
        color: 'white',
        type: 'BasicSnackbar',
    };

    constructor(props) {
        super(props);

        this.state = {
            mount: false,
        };

        this.animateIn = this.animateIn.bind(this);
        this.animateOut = this.animateOut.bind(this);
    }

    componentDidMount() {
        const { show } = this.props;

        if (show) this.animateIn();
    }

    componentDidUpdate(prevProps) {
        const { dismissSnackbar, location, show } = this.props; // eslint-disable-line no-shadow

        if (prevProps.location.pathname !== location.pathname && prevProps.show) {
            dismissSnackbar();
        }

        if (!prevProps.show && show) {
            this.animateIn();
        } else if (prevProps.show && !show) {
            this.animateOut();
        }
    }

    animateIn() {
        this.setState(
            {
                mount: true,
            },
            () => {
                Animated.timing(this.anim, {
                    toValue: 1,
                    duration: 200,
                    ease: Easing.inOut(Easing.cubic),
                }).start();
            },
        );
    }

    animateOut() {
        Animated.timing(this.anim, {
            toValue: 0,
            duration: 200,
            ease: Easing.inOut(Easing.cubic),
        }).start(() => {
            this.setState({
                mount: false,
            });
        });
    }

    get rootStyle() {
        return {
            opacity: this.anim,
            transform: [
                {
                    translateY: this.anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['110%', '0%'],
                    }),
                },
            ],
        };
    }

    render() {
        const { color, data, type, dismissSnackbar } = this.props; // eslint-disable-line no-shadow

        const { mount } = this.state;
        const SnackbarComponent = snackbars[type];

        return mount ? (
            <Portal>
                <Root style={this.rootStyle}>
                    <SnackbarComponent color={color} data={data} onClose={dismissSnackbar} />
                </Root>
            </Portal>
        ) : null;
    }
}

const mapStateToProps = createStructuredSelector({
    data: makeSelectSnackbarData(),
    show: makeSelectShowSnackbar(),
    type: makeSelectSnackbarType(),
});

export default compose(
    withTheme,
    withRouter,
    connect(
        mapStateToProps,
        { dismissSnackbar },
    ),
)(Snackbar);
