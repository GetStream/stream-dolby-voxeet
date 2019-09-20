import { createGlobalStyle } from 'styled-components';

import chat from './css/chat';
import voxeet from './css/voxeet';

export default createGlobalStyle`
    * {
        outline: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html {
        height: 100%;
        width: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        color: ${({ theme }) => theme.color.text};
        display: flex;
        align-items: stretch;
        flex-direction: column;
    }

    #root {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        flex: 1;
    }

    h1, h2, h3, h4, h5, h6, h7, h8 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    input {
        outline: none !important;
    }

    ${chat}
    ${voxeet}
`;
