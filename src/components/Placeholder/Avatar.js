import React from 'react';

// Components //
import PlaceholderSVG from './PlaceholderSVG';

const PlaceholderAvatar = (props) => {
    return (
        <PlaceholderSVG {...props} viewBox='0 0 200 200'>
            <circle fill='url(#loader-gradient)' cx='100' cy='100' r='100' />
        </PlaceholderSVG>
    );
};

export default PlaceholderAvatar;
