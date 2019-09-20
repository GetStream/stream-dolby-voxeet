import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import shortid from 'shortid';

// Redux //
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthed, makeSelectCurrentUser } from 'data/auth/selectors';
import { loginRequest } from 'data/auth/actions';
import { queueSnackbar } from 'containers/Snackbar/actions';

// Assets //
import BackgroundImg from 'assets/bg.jpg';
import StreamLogo from 'assets/stream.svg';

// Forms //
import LoginForm from 'forms/LoginForm';

// Components //
import Button from 'components/Button';
import Logo from 'components/Logo';
import Text from 'components/Text';

const Root = styled.div`
    display: flex;
    flex: 1;
    background-image: url(${BackgroundImg});
    background-size: cover;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colorUtils.fade(theme.color.background, 0.88)};
`;

const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    padding: 0px 24px;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: center;
`;

const Title = styled(Text)`
    margin-top: 16px;
    text-transform: capitalize;
`;

const Avatar = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    margin-bottom: 16px;
`;

const Header = styled.div`
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 24px 40px 24px;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const CallBtn = styled(Button)`
    margin-top: 32px;
`;

const Stream = styled.img`
    max-height: 96px;
    margin-left: 40px;
`;

class Login extends Component {
    get conferenceAlias() {
        const { location } = this.props;
        return location.state ? location.state.conferenceAlias : null;
    }

    async componentDidMount() {
        const { queueSnackbar } = this.props;
        if (this.conferenceAlias) {
            await queueSnackbar({
                isError: true,
                text: 'Please login first.',
            });
        }
    }

    get userName() {
        const { user } = this.props;
        return user.name.replace(/_/g, ' ');
    }

    startCall = () => {
        const { history } = this.props;
        const conferenceAlias = shortid();
        history.push(`/${conferenceAlias}`);
    };

    handleLogin = (val) => {
        const { loginRequest } = this.props;
        loginRequest(val, this.conferenceAlias);
    };

    renderForm = () => {
        return (
            <Container>
                <Title size={40} weight='600'>
                    Welcome.
                </Title>
                <Text size={16}>Enter a username to get started.</Text>
                <LoginForm conferenceAlias={this.conferenceAlias} onSubmit={this.handleLogin} />
            </Container>
        );
    };

    renderWelcome = () => {
        const { user } = this.props;
        return (
            <Container>
                <Avatar src={user.image} />
                <Title size={32} weight='600'>
                    Welcome back, {this.userName}.
                </Title>
                <CallBtn label='Start Video Call' onClick={this.startCall} />
            </Container>
        );
    };

    render() {
        const { isAuthed } = this.props;
        return (
            <Root>
                <Overlay />
                <Header>
                    <Logo color='white' size={56} />
                    <Stream src={StreamLogo} />
                </Header>
                {isAuthed ? this.renderWelcome() : this.renderForm()}
            </Root>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isAuthed: makeSelectIsAuthed(),
    user: makeSelectCurrentUser(),
});

export default connect(
    mapStateToProps,
    { loginRequest, queueSnackbar },
)(Login);
