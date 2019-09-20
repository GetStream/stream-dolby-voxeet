import React from 'react';
import styled from 'styled-components';

// Components //
import { CloseIcon } from 'components/Icons';
import Text from 'components/Text';

const Root = styled.div`
    position: relative;
    z-index: 1;
    padding: 8px 40px;
    min-height: 72px;
    display: flex;
    background-color: ${({ theme }) => theme.color.background};
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.56);
    color: white !important;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > ${Text}
`;

const Fill = styled.span`
    flex: 1 1 auto;
`;

const Btn = styled.div`
    cursor: pointer;
`;

const ChatHeader = ({ onClose }) => (
    <Root>
        <div>
            <Text size={24} weight='600' color='white'>
                Chat
            </Text>
        </div>
        <Fill />
        <Btn onClick={onClose}>
            <CloseIcon color='white' size={24} />
        </Btn>
    </Root>
);

export default ChatHeader;
