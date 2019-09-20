import React, { forwardRef } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';

const AnimatedText = Animated.createAnimatedComponent('p');

const Text = styled(
    forwardRef(({ color, faded, fontFamily, lineHeight, paragraph, size, weight, ...props }, ref) => (
        <AnimatedText ref={ref} {...props} />
    )),
)`
    color: ${({ color, theme }) => theme.color[color]};
    font-weight: ${({ weight }) => weight};
    font-family: ${({ fontFamily }) => fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    font-size: ${({ size }) => size}px;
    opacity: ${({ faded }) => (faded ? 0.5 : 1)};
    line-height: ${({ lineHeight, size, paragraph }) => lineHeight || size + 10}px;
`;

Text.propTypes = {
    color: PropTypes.string,
    weight: PropTypes.oneOf(['100', '200', '300', '400', '500', '600', '700', '800', '900']),
    size: PropTypes.number,
    faded: PropTypes.any,
};

Text.defaultProps = {
    color: 'text',
    faded: false,
    fontFamily: 'Helvetica Neue',
    weight: '400',
    size: 17,
};

export default Text;
