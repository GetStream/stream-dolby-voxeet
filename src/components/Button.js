import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components //
import Text from 'components/Text';

const Root = styled.button`
    border: 0;
    background-color: ${({ theme }) => theme.color.purple};
    background-image: ${({ theme }) => theme.color.gradient};
    border-radius: 8px;
    box-shadow: 0px 4px 24px ${({ theme }) => theme.colorUtils.fade(theme.color.purple, 0.4)};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    cursor: pointer;
`;

const Button = ({ className, label, onClick, type }) => (
    <Root className={className} type={type} onClick={onClick}>
        <Text size={16}>{label}</Text>
    </Root>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit']).isRequired,
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
