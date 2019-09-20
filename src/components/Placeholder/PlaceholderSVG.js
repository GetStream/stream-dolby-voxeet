import React, { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

class PlaceholderSVG extends PureComponent {
    static propTypes = {
        radius: PropTypes.number,
        size: PropTypes.number,
    };

    static defaultProps = {
        color: 'placeholder',
        radius: 4,
        size: 40,
    };

    constructor(props) {
        super(props);

        const uniqueId = `${Math.floor(Math.random() * 0xffff)}`;
        this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }

    render() {
        const { children, color, radius, theme, size, ...rest } = this.props;
        return (
            <svg
                fill={theme.color[color]}
                viewBox={`0 0 ${size} ${size}`}
                {...rest}
                style={{ ...rest.style, width: size, height: size }}
            >
                <defs>
                    <linearGradient id={`placeholder-${this.uniqueId}`} x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='8%' stopColor={theme.color[color]}>
                            <animate
                                attributeName='offset'
                                values='-1;-1;-1;0;1;1;1;'
                                dur='1.3s'
                                repeatCount='indefinite'
                            />
                        </stop>

                        <stop
                            offset='50%'
                            stopColor={theme.colorUtils.lighten(theme.color[color], 0.04)}
                            stopOpacity='1'
                        >
                            <animate
                                attributeName='offset'
                                values='-1;-1;0;1;1;1;'
                                dur='1.3s'
                                repeatCount='indefinite'
                            />
                        </stop>

                        <stop offset='100%' stopColor={theme.color[color]} stopOpacity='1'>
                            <animate attributeName='offset' values='-1;0;1;1;1;' dur='1.3s' repeatCount='indefinite' />
                        </stop>
                    </linearGradient>
                </defs>
                {cloneElement(Children.only(children), {
                    rx: radius,
                    ry: radius,
                    color,
                    width: size,
                    height: size,
                    fill: `url(#placeholder-${this.uniqueId})`,
                })}
            </svg>
        );
    }
}

export default withTheme(PlaceholderSVG);
