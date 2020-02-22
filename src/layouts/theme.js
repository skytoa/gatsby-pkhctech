import { APP_THEME } from '../types/theme';
import { grey, blue } from "@material-ui/core/colors";

const appThemeOptions = {
  [APP_THEME.LIGHT]: {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html': {
            height: '100%',
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
          'body': {
            height: '100%',
            margin: 0,
            padding: 0,
          },
          '*::-webkit-scrollbar': {
            width: '1em'
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
          },
          '*::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(200deg, #2AA7DE, #663399)',
            outline: '1px solid slategrey',
            borderRadius: '10px',
          }
        }
      },
    },
    palette: {
      type: APP_THEME.LIGHT,
      primary: {
        light: blue[200],
        main: '#fff',
        dark: blue[600]
      },
      secondary: {
        light: blue[200],
        main: blue[400],
        dark: blue[600]
      },
      background: {
        default: '#fff',
        secondary: '#2AA7DE',
      }
    },
  },
  [APP_THEME.DARK]: {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html': {
            height: '100%',
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
          'body': {
            height: '100%',
            margin: 0,
            padding: 0,
          },
          '*::-webkit-scrollbar': {
            width: '1em'
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
          },
          '*::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(200deg, #2AA7DE, #663399)',
            outline: '1px solid slategrey',
            borderRadius: '10px',
          }
        }
      },
    },
    palette: {
      type: APP_THEME.DARK,
      primary: {
        light: grey[200],
        main: '#222',
        dark: grey[600]
      },
      secondary: {
        light: grey[200],
        main: grey[400],
        dark: grey[600]
      },
      background: {
        default: '#222',
        secondary: '#202020',
      }
    },
  }
};

export default appThemeOptions;
