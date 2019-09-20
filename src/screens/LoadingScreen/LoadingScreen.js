import React from 'react';
import styled from 'styled-components';

// Components //
import PlaceholderLogo from 'components/Placeholder/Logo';
import Text from 'components/Text';

const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;

    & > ${Text} {
        opacity: .08;
        margin-top: 16px;
        text-transform: uppercase;
    }
`;

const LoadingScreen = () => (
    <Root>
        <PlaceholderLogo size={80} />
        <Text size={16} weight='500'>
            Loading
        </Text>
    </Root>
);

export default LoadingScreen;
