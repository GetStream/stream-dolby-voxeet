import React, { Component } from 'react';
import styled from 'styled-components';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, Window, Thread, MessageList, MessageInput, Message } from 'stream-chat-react';
import { withRouter } from 'react-router-dom';
import Animated from 'animated/lib/targets/react-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Redux //
import { toggleAttendeesChat, setUnreadCount } from 'data/chat/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser, makeSelectStreamToken } from 'data/auth/selectors';

// Components //
import Portal from 'utils/Portal';
import ChatHeader from './ChatHeader';

const Root = styled(Animated.div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    max-width: 376px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.trueblack};
`;

class AttendeesChat extends Component {
    anim = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.chatClient = new StreamChat(process.env.REACT_APP_STREAM_KEY);
        this.state = {
            channel: null,
            unmount: true,
        };
    }

    async componentDidMount() {
        const { match, user, streamToken } = this.props;

        await this.chatClient.setUser(user, streamToken);
        const channel = await this.chatClient.channel('messaging', match.params.conferenceAlias, {
            name: 'Video Call',
        });

        await this.setState({
            channel,
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        const { attendeesChatOpened, setUnreadCount } = this.props;
        const { channel } = this.state;

        if (!prevState.channel && channel) {
            this.init();
        }

        if (!prevProps.attendeesChatOpened && attendeesChatOpened) {
            await this.setState({ unmount: false });
            setUnreadCount(0);
            document.body.classList.add('chat-open');
            Animated.timing(this.anim, {
                toValue: 1,
                duration: 250,
            }).start();
        } else if (prevProps.attendeesChatOpened && !attendeesChatOpened) {
            document.body.classList.remove('chat-open');
            Animated.timing(this.anim, {
                toValue: 0,
                duration: 250,
            }).start(() => {
                this.setState({
                    unmount: true,
                });
            });
        }
    }

    async init() {
        const { channel } = this.state;
        await channel.watch();

        channel.on('message.new', this.handleNewMessage);
    }

    handleNewMessage = async () => {
        const { attendeesChatOpened, setUnreadCount } = this.props;
        const { channel } = this.state;
        const unread = await channel.countUnread();
        setUnreadCount(attendeesChatOpened ? 0 : unread);
    };

    get rootStyle() {
        return {
            transform: [
                {
                    translateX: this.anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['100%', '0%'],
                    }),
                },
            ],
        };
    }

    render() {
        const { toggleAttendeesChat } = this.props;
        const { channel, unmount } = this.state;
        if (!channel || unmount) {
            return null;
        }
        return (
            <Portal>
                <Root style={this.rootStyle}>
                    <Chat client={this.chatClient} theme='messaging dark'>
                        <Channel channel={channel}>
                            <Window hideOnThread>
                                <ChatHeader onClose={toggleAttendeesChat} />
                                <MessageList Message={this.renderMessage} />
                                <MessageInput />
                            </Window>
                            <Thread Message={Message} fullWidth />
                        </Channel>
                    </Chat>
                </Root>
            </Portal>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: makeSelectCurrentUser(),
    streamToken: makeSelectStreamToken(),
});

export default compose(
    connect(
        mapStateToProps,
        { toggleAttendeesChat, setUnreadCount },
    ),
    withRouter,
)(AttendeesChat);
