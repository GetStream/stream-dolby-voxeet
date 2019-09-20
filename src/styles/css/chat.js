import { css } from 'styled-components';

export default css`
    .str-chat-channel.messaging .str-chat__main-panel {
        padding: 0 !important;
    }

    .str-chat {
        height: 100% !important;
    }

    .str-chat-channel {
        max-height: inherit !important;
    }

    .str-chat__main-panel {
        width: 100% !important;
    }

    .str-chat__message-inner {
        width: 100% !important;
        flex: !important;
    }

    /*
    *   Gradient Bubbles
    */

    .dark.str-chat .str-chat__message-simple-text-inner {
        color: #000000 !important;
    }

    .str-chat.messaging.dark,
    .str-chat__container {
        position: relative;
        background-color: #000000;
        border-left: 1px solid #000000;
        overflow: hidden;
    }

    .str-chat-channel.messaging .str-chat__main-panel {
        padding: 0;
    }

    .str-chat__reverse-infinite-scroll {
        width: 100%;
        flex: 1;
    }

    ul.str-chat__ul {
        flex: 1 !important;
    }

    .dark.str-chat .str-chat__message-simple-text-inner {
        background: rgba(255, 255, 255, 0.12);
        color: white !important;
    }

    .str-chat__li.str-chat__li--top {
        flex: 1 !important;
    }

    .dark.str-chat .str-chat__message-simple--me .str-chat__message-simple-text-inner {
        color: black !important;
    }

    .str-chat__message-simple__actions__action--thread {
        display: none !important;
    }

    .str-chat__modal__inner {
        background: ${({ theme }) => theme.color.background} !important;
    }

    .str-chat.dark .str-chat__edit-message-form textarea {
        background-color: rgba(0, 0, 0, 0.56);
        color: white !important;
    }

    /* Message Bubbles */
    @supports (mix-blend-mode: multiply) {
        .str-chat__main-panel:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: #8148FC;
            background-image: linear-gradient(to bottom, #8148FC 0%, #55AAFF 100%);
            mix-blend-mode: multiply;
            pointer-events: none;
        }
        .str-chat__message-simple-text-inner,
        .str-chat__message-simple-text-inner a {
            color: black !important;
        }
        .str-chat__message:not(.str-chat__message-simple--me) {
            z-index: 1;
        }
        .str-chat__message-simple--me .str-chat__message-simple-text-inner {
            background: white !important;
            color: black !important;
        }
        .dark.str-chat .str-chat__message-simple-text-inner--is-emoji {
            background: transparent !important;
            z-index: 1;
            color: white;
        }
        .str-chat__message-simple-text-inner--is-emoji > p {
            color: white;
        }
        .dark.str-chat .str-chat__date-separator-line {
            background-color: white !important;
        }
        .dark.str-chat .str-chat__message-simple .str-chat__message-attachment-card,
        .dark.str-chat .str-chat__player-wrapper {
            z-index: 1 !important;
        }
        .str-chat__avatar {
            z-index: 1;
        }
        .dark.str-chat .str-chat__message-simple-data {
            opacity: 1 !important;
        }
        .dark.str-chat .str-chat__input,
        .str-chat__input-footer {
            background: ${({ theme }) => theme.color.background} !important;
        }
`;
