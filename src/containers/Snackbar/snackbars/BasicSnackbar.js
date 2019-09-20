import React from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';

// Components //
import Text from 'components/Text';

const Root = styled(({ hasLink, ...props }) => <Animated.div {...props} />)`
    display: flex;
    flex-direction: flex;
    width: 100%;
    min-height: 48px;
    padding: 20px;
    background-color: ${({ color, theme }) => theme.color[color]};
    align-items: center;
    user-select: none;
    cursor: ${({ hasLink }) => (hasLink ? 'pointer' : 'default')};
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    box-shadow: 0px 2px 8px ${({ color, theme }) => theme.colorUtils.fade(theme.color.black, 0.16)};
`;

const BasicSnackbar = ({ color, data, onClose, theme }) => (
    <Root color={data.isError ? 'error' : color}>
        <Text color='white' paragraph>
            {data.text}
        </Text>
    </Root>
);

BasicSnackbar.defaultProps = {
    color: 'gray',
};

export default BasicSnackbar;
