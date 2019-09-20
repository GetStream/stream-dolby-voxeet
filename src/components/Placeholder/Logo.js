import React from 'react';
import PropTypes from 'prop-types';

// Components //
import PlaceholderSVG from './PlaceholderSVG';

const PlaceholderLogo = (props) => {
    return (
        <PlaceholderSVG {...props} viewBox='0 0 54 38'>
            <path
                d='M54,0 L54,38 L0,38 L0,0 L54,0 Z M47.6434464,4.91953448 L41.4721665,4.91953448 C35.0750193,4.91953448 29.7364302,11.353665 29.7364302,18.9435325 C29.7364302,26.761381 35.0750193,33.0772991 41.4721665,33.0772991 L47.6434464,33.0772991 L47.6434464,4.91953448 Z M12.5215883,4.91953448 L6.37112567,4.91953448 L6.37112567,33.0772991 L12.5215883,33.0772991 C18.915613,33.0772991 24.2531611,26.761381 24.2531611,18.9435325 C24.2531611,11.353665 18.915613,4.91953448 12.5215883,4.91953448 Z'
            />
        </PlaceholderSVG>
    );
};

PlaceholderLogo.propTypes = {
    fill: PropTypes.string,
};

export default PlaceholderLogo;
