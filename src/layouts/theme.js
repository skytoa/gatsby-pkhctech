import { AppTheme } from '../modules/constants';
import { grey, red } from "@material-ui/core/colors";

const appThemeOptions = {
  [AppTheme.LIGHT]: {
    palette: {
      type: 'light',
      primary: {
        light: red[200],
        main: '#fff',
        dark: red[600]
      },
      secondary: {
        light: red[200],
        main: red[400],
        dark: red[600]
      },
      background: {
        default: '#fff',
        secondary: '#2AA7DE',
      }
    },
  },
  [AppTheme.DARK]: {
    palette: {
      type: 'dark',
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
