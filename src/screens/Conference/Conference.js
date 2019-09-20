import React, { Component } from 'react';
import styled from 'styled-components';
import { ConferenceRoom } from '@voxeet/react-components';
import { connect } from 'react-redux';
import voxeet from 'data/voxeet';

// Screens //
import LoadingScreen from 'screens/LoadingScreen';

// Redux //
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'data/auth/selectors';
import { makeSelectShowModal } from './selectors';

// Assets //
import StreamLogo from 'assets/stream.svg';

// Components //
import Logo from 'components/Logo';
import InvitationModal from './components/InvitationModal';
import ActionsButtons from './components/ActionsButtons';

// Containers //
import AttendeesChat from './containers/AttendeesChat';

const Header = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    padding: 24px;
    z-index: 101;
    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}px) {
        display: flex;
    }
`;

const Stream = styled.img`
    max-width: 48px;
    margin-left: 40px;
`;

class Conference extends Component {
    state = {
        showInvitationModal: false,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.showModal && !this.props.showModal) {
            this.toggleModal();
        }
    }

    handleOnConnect = () => {
        const { showModal } = this.props;
        if (showModal) {
            this.toggleModal();
        }
        console.log('Participant connected');
    };

    handleOnLeave = () => {
        console.log('Participant disconnected');
        this.props.history.push('/');
    };

    get settings() {
        const { user } = this.props;

        let userInfo = {};

        if (user) {
            userInfo = {
                ...user,
                externalId: user.id,
                avatarUrl: user.image,
            };
        }

        return {
            consumerKey: process.env.REACT_APP_VOX_KEY,
            consumerSecret: process.env.REACT_APP_VOX_SECRET,
            constraints: {
                audio: true,
                video: true,
            },
            videoRatio: {
                width: 1920,
                height: 1080,
            },
            videoCodec: 'H264',
            userInfo,
            sdk: voxeet.instance,
        };
    }

    toggleModal = () => {
        const { showInvitationModal } = this.state;
        this.setState({
            showInvitationModal: !showInvitationModal,
        });
    };

    render() {
        const { match } = this.props;
        const { showInvitationModal } = this.state;
        return (
            <>
                <Header>
                    <Logo color='white' size={32} />
                    <Stream src={StreamLogo} />
                </Header>
                <ConferenceRoom
                    loadingScreen={LoadingScreen}
                    actionsButtons={ActionsButtons}
                    attendeesChat={AttendeesChat}
                    isWidget={false}
                    autoJoin
                    kickOnHangUp
                    handleOnLeave={this.handleOnLeave}
                    handleOnConnect={this.handleOnConnect}
                    {...this.settings}
                    conferenceAlias={match.params.conferenceAlias}
                />
                <InvitationModal open={showInvitationModal} onClose={this.toggleModal} />
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: makeSelectCurrentUser(),
    showModal: makeSelectShowModal(),
});

export default connect(mapStateToProps)(Conference);
