import { css } from 'styled-components';

export default css`
    /*
* Main Wrapper
*/
    .vxt-conference-attendees {
        background: ${({ theme }) => theme.color.background} !important;
    }

    @media screen and (max-width: 767px) {
        .vxt-conference-attendees .sidebar-container {
            margin-bottom: 80px !important;
        }
    }

    /*
    * Attendees Settings
    */

    .attendees-settings {
        background: #000000 !important;
        height: calc(100% - 96px) !important;

        & .attendees-settings-header {
            border-color: ${({ theme }) => theme.color.gray} !important;
        }

        & h1 {
            color: #ffffff !important;
        }

        & .settings {
            height: inherit !important;
            background: #000000 !important;

            & .loadbar {
                padding: 0px !important;
                & li {
                    background: ${({ theme }) => theme.color.slate} !important;
                    & > .ins {
                        background: ${({ theme }) => theme.color.purple} !important;
                    }
                }
            }

            & .content .form-group select {
                border-color: ${({ theme }) => theme.color.gray} !important;
                color: #ffffff !important;
                padding: 4px;
            }

            & .content p {
                color: white !important;
                opacity: 0.56 !important;
            }
        }
    }

    /*
    * AttendeesList
    */
    .attendees-list {
        background: #000000 !important;
        height: calc(100% - 96px) !important;

        & .attendees-list-header,
        & ul {
            border-color: ${({ theme }) => theme.color.gray} !important;
        }

        & .attendees-list-header h1,
        & .title-section,
        & .participant-details .participant-username {
            color: #ffffff !important;
        }

        & .title-section {
            opacity: 0.56;
        }
    }

    /*
*   View Switcher
*/

    .SidebarList {
        background: ${({ theme }) => theme.color.gray} !important;
    }

    .vxt-conference-attendees,
    .vxt-conference-attendees .SidebarSpeaker .active-speaker .video-frame {
        background: ${({ theme }) => theme.color.background} !important;
        & p {
            color: ${({ theme }) => theme.color.black};
        }
    }

    /*
*   Notification Snackbar
*/
    .vxt-conference-attendees .onboardingmessage,
    .vxt-conference-attendees .onboardingmessage-fadeout {
        width: inherit !important;
        top: inherit !important;
        left: 50% !important;
        right: inherit !important;
        bottom: 120px !important;
        padding: 20px 16px !important;
        background: ${({ theme }) => theme.color.gradient} !important;
        border-radius: ${({ theme }) => theme.borderRadius}px;
        transform: translateX(-50%) !important;

        .chat-open & {
            transform: translateX(calc(-50% - (376px / 2))) !important;
        }
    }

    /*
* Bottom Bar
*/
    .vxt-bottom-bar {
        background-color: transparent !important;
        width: auto !important;
        left: 0 !important;
        right: 0 !important;
        transition: right 250ms;

        .chat-open & {
            @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}px) {
                right: 376px !important;
            }
        }
    }

    .vxt-conference-attendees .SidebarSpeaker .active-speaker .video-frame .fullscreen-screenshare {
        height: 30px !important;
    }

    /*
* Attendee
*/
    /* Video Wrapper */
    .vxt-widget-fullscreen-on .vxt-conference-attendees .SidebarTiles .tile-item .tile-video,
    .vxt-conference-attendees {
        background-color: ${({ theme }) => theme.color.background} !important;
    }

    /* Name Bar */
    .vxt-conference-attendees .participant-bar {
        background-color: #232328 !important;
        border: 0 !important;
    }

    /* Waiting for attendees placeholder */
    .vxt-conference-attendees .conference-empty p {
        opacity: 1 !important;
        background-image: ${({ theme }) => theme.color.gradient} !important;
    }

    /*
* Chat
*/
    .vxt-widget-fullscreen-on .vxt-conference-attendees .sidebar-container.attendees-list-opened {
        margin-right: 376px !important;
    }

    /*
    * Error Banner
    */
    .onboardingmessagewithaction-error {
        background: ${({ theme }) => theme.color.red} !important;
    }
`;
