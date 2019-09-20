import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const Icon = ({ children, className, color, onClick, theme, size, viewBox, style }) => {
    return (
        <svg className={className} width={size} height={size} viewBox={viewBox} style={style} onClick={onClick}>
            {cloneElement(children, { fill: theme.color[color] })}
        </svg>
    );
};

Icon.propTypes = {
    className: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    style: PropTypes.object,
    theme: PropTypes.object.isRequired,
    viewBox: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    color: 'text',
    size: 24,
    viewBox: '0 0 24 24',
};

export default withTheme(Icon);
