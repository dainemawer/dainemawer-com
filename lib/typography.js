import Typography from 'typography'
import FairyGatesTheme from 'typography-theme-fairy-gates'

delete FairyGatesTheme.googleFonts;

FairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1 / 2),
    },
    "a": {
        color: '#313131',
        backgroundImage: 'none',
        textShadow: 'none',
        textDecoration: 'none'
    }
});

FairyGatesTheme.scaleRatio = 5 / 2;
FairyGatesTheme.baseFontSize = '16px';

const typography = new Typography(FairyGatesTheme);

if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;