import breakpoints from './breakpoints';
import colors from './colors';
import * as colorUtils from './colorUtils';

export default {
    breakpoints,
    borderRadius: 8,
    color: {
        background: colors.black,
        error: colors.red,
        text: colors.white,
        undersheet: colorUtils.fade(colors.black, 0.5),
        placeholder: colors.gray,
        border: colorUtils.fade(colors.white, 0.16),
        gradient: 'linear-gradient(120deg, #8148FC 0%, #55AAFF 100%)',
        ...colors,
    },
    colorUtils,
    easing: {
        accelerate: [0.4, 0.0, 1, 1],
        deccelerate: [0.0, 0.0, 0.2, 1],
        standard: [0.4, 0.0, 0.2, 1],
        css: (easing) => `cubic-bezier(${easing.join(',')})`,
    },
    z: {
        snackbar: 101,
        modal: 100,
    },
};
