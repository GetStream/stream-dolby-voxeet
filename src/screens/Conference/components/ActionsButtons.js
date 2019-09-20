import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Selectors //
import { createStructuredSelector } from 'reselect';
import { makeSelectUnreadCount } from 'data/chat/selectors';

// Components //
import {
    ChatIcon,
    CloseIcon,
    HangUpIcon,
    MicOffIcon,
    MicOnIcon,
    VideoOffIcon,
    VideoOnIcon,
    PeopleIcon,
    SettingsIcon,
    ShareScreenIcon,
    ShareScreenOffIcon,
} from 'components/Icons';
import ActionButton from './ActionButton';

const Root = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    padding: 16px 48px;
    margin-right: ${({ sidebarOpen }) => (sidebarOpen ? 376 : 0)}px;
    transition: margin-right 250ms;
`;

const MainControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    & > * + * {
        margin-left: 16px;
    }
`;

const ActionButtons = ({
    attendeesChatOpened,
    attendeesListOpened,
    attendeesSettingsOpened,
    isMuted,
    isScreenshare,
    leave,
    toggleAttendeesChat,
    toggleAttendeesList,
    toggleAttendeesSettings,
    toggleMicrophone,
    toggleScreenShare,
    toggleVideo,
    videoEnabled,
    unreadCount,
    ...props
}) => {
    console.log(props);
    const sidebarOpen = attendeesChatOpened || attendeesListOpened;
    return (
        <Root sidebarOpen={sidebarOpen}>
            <Actions>
                <ActionButton
                    icon={attendeesSettingsOpened ? CloseIcon : SettingsIcon}
                    onClick={toggleAttendeesSettings}
                    size={40}
                />
                <ActionButton
                    icon={isScreenshare ? ShareScreenOffIcon : ShareScreenIcon}
                    onClick={toggleScreenShare}
                    size={40}
                />
            </Actions>
            <MainControls>
                <ActionButton icon={isMuted ? MicOffIcon : MicOnIcon} onClick={toggleMicrophone} size={40} />
                <ActionButton color='red' icon={HangUpIcon} onClick={leave} />
                <ActionButton
                    enabled={videoEnabled}
                    icon={videoEnabled ? VideoOnIcon : VideoOffIcon}
                    onClick={toggleVideo}
                    size={40}
                />
            </MainControls>
            <Actions>
                <ActionButton
                    icon={attendeesListOpened ? CloseIcon : PeopleIcon}
                    onClick={toggleAttendeesList}
                    size={40}
                />
                <ActionButton
                    showBadge={unreadCount > 0}
                    icon={attendeesChatOpened ? CloseIcon : ChatIcon}
                    onClick={toggleAttendeesChat}
                    size={40}
                />
            </Actions>
        </Root>
    );
};

const mapStateToProps = createStructuredSelector({
    unreadCount: makeSelectUnreadCount(),
});

export default connect(mapStateToProps)(ActionButtons);
