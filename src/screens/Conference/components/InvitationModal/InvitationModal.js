import React, { Component } from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';

// Components //
import Modal from 'components/Modal';
import Text from 'components/Text';
import Input from 'components/Input';
import { CloseIcon, CopyIcon } from 'components/Icons';

const Root = styled(Animated.div)`
    position: fixed;
    padding: 24px;
    top: 50%;
    left: 50%;
    max-width: 560px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background};
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.56);
    border-radius: ${({ theme }) => theme.borderRadius}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: center center;
    z-index: ${({ theme }) => theme.z.modal};
`;

const Header = styled.div`
    margin-bottom: 24px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Notify = styled(Text)`
    height: 16px;
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.color.purple};
`;

const IconButton = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & input {
        width: 248px;
    }

    & > ${IconButton} {
        margin-left: 16px;
    }
`;

const CloseButton = styled(IconButton)`
    position: absolute;
    top: 24px;
    right: 24px;
`;

class InvitationModal extends Component {
    anim = new Animated.Value(0);

    input = React.createRef();

    state = {
        hasCopied: false,
    };

    get rootStyle() {
        return {
            transform: [
                {
                    scale: this.anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                    }),
                },
                {
                    translateY: '-50%',
                },
                {
                    translateX: '-50%',
                },
            ],
            opacity: this.anim,
        };
    }

    handleCopyClick = () => {
        this.input.current.select();
        document.execCommand('copy');
        this.setState({
            hasCopied: true,
        });
    };

    render() {
        const { onClose, open } = this.props;
        const { hasCopied } = this.state;

        return (
            <Modal animated animatedValue={this.anim} open={open} onClose={onClose}>
                <Root style={this.rootStyle}>
                    <CloseButton onClick={onClose}>
                        <CloseIcon size={24} color='white' />
                    </CloseButton>
                    <Header>
                        <Text size={24} color='white' weight='600'>
                            Invite your friends!
                        </Text>
                    </Header>
                    <InputWrapper>
                        <Input ref={this.input} readOnly value={window.location.href} />
                        <IconButton onClick={this.handleCopyClick}>
                            <CopyIcon color='white' size={24} />
                        </IconButton>
                    </InputWrapper>
                    <Notify>{hasCopied ? 'Copied to clipboard!' : ''}</Notify>
                </Root>
            </Modal>
        );
    }
}

export default InvitationModal;
