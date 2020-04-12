import React from 'react';
import { 
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import { useIntl } from "gatsby-plugin-intl";
import { APP_THEME } from "../types/theme";

const useStyles = makeStyles(theme => ({
  IconWrapper: {
    padding: 0,
    appearance: 'none',
    alignItems: 'center',
    background: 'transparent',
    borderRadius: '5px',
    border: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    height: '40px',
    justifyContent: 'center',
    /*
      roughly compensates for the additional whitespace of this specific
      "icon button" in relation to its "social icon" siblings;
      leave the left untouched for some separation from the aforementioned
    */
    marginRight: '-11px',
    opacity: '0.75',
    /*
      allows us to use the default :focus
      outline without the "moon mask" being taken into account
      by the browser when rendering the outline —
      not an ideal solution, but good for now
    */
    overflow: 'hidden',
    position: 'relative',
    /*
      scaling to 75% of the original size
      scales the "moon" shape from 24px to 18px,
      aligning it with the rest of the main nav's
      "social icons"; sun and its rays are slightly larger;
      good for now, too ;-)
    */
    transform: 'scale(1)',
    transition: 'opacity 0.3s ease',
    verticalAlign: 'middle',
    width: '40px',

    '&:hover': {
      opacity: 1
    },

    '&:focus': {
      outline: 0,
    }
  },
  MoonOrSun: {
    border: props => props.theme === APP_THEME.DARK ? '4px solid #635e69' : '2px solid #635e69',
    background: props => props.theme === APP_THEME.DARK ? '#fff' : '#635e69',
    borderRadius: '50%',
    height: '24px',
    overflow: props => props.theme === APP_THEME.DARK ? 'visible' : 'hidden',
    position: 'relative',
    transform: props => props.theme === APP_THEME.DARK ? 'scale(0.55)' : 'scale(1)',
    transition: 'all 0.45s ease',
    width: '24px',

    '&::before': {
      borderRadius: '50%',
      border: '2px solid #fff',
      content: "''",
      height: '24px',
      opacity: props => props.theme === APP_THEME.DARK ? 0 : 1,
      position: 'absolute',
      right: '-9px',
      top: '-9px',
      transform: props => props.theme === APP_THEME.DARK ? 'translate(14px, -14px)' : 'translate(0, 0)',
      transition: 'transform 0.45s ease',
      width: '24px',
    },

    '&::after': {
      borderRadius: '50%',
      boxShadow: '0 -23px 0 #fff, 0 23px 0 #fff, 23px 0 0 #fff, -23px 0 0 #fff, 15px 15px 0 #fff, -15px 15px 0 #fff, 15px -15px 0 #fff, -15px -15px 0 #fff',
      content: "''",
      height: '8px',
      left: '50%',
      margin: '-4px 0 0 -4px',
      position: 'absolute',
      top: '50%',
      width: '8px',
      transform: props => props.theme === APP_THEME.DARK ? 'scale(0.92)' : 'scale(0)',
      transition: 'all 0.35s ease',
    }
  },
  MoonMask: {
    background: '#fff',
    borderRadius: '50%',
    border: 0,
    height: '24px',
    opacity: props => props.theme === APP_THEME.DARK ? 0 : 1,
    position: 'absolute',
    right: 0,
    top: 0,
    transform: props => props.theme === APP_THEME.DARK ? 'translate(14px, -14px)' : 'translate(0, 0)',
    transition: 'background 0.25s ease, transform 0.45s ease',
    width: '24px',
  }
}));

const ChangeDarkMode = ({ theme, toggle }) => {
  const classes = useStyles({theme});
  const intl = useIntl();

  const label = theme === APP_THEME.DARK ? intl.formatMessage({ id: 'activate_light_mode' }) : intl.formatMessage({ id: 'activate_dark_mode' });
  
  return (
    <Tooltip title={label} placement="bottom">
      <button className={classes.IconWrapper}
        onClick={toggle}
        aria-label={label}
      >
        <div className={classes.MoonOrSun} />
        <div className={classes.MoonMask} />
      </button>
    </Tooltip>
  )
}

export default ChangeDarkMode;
