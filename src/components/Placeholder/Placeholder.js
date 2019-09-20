import React from 'react';
import PropTypes from 'prop-types';

// Components //
import PlaceholderSVG from './PlaceholderSVG';

const PlaceholderText = (props) => {
    return (
        <PlaceholderSVG {...props}>
            <rect rx='4' ry='4' fill={props.fill} width={props.size} height={props.size} />
        </PlaceholderSVG>
    );
};

PlaceholderText.propTypes = {
    fill: PropTypes.string,
};

export default PlaceholderText;
