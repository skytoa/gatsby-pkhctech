import React from 'react';
import { useIntl } from "gatsby-plugin-intl";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    margin: '-6px 0 0 20px',
    cursor: 'pointer',
    outline: 0,
    border: 0,
    background: 'transparent',

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  line: {
    background: '#009FD4',
    display: 'block',
    height: '4px',
    margin: '10px 0 0 0',
    transition: 'all .1s ease-in-out',
    width: '36px',
  },
  active: {
    '& $line': {
      '&:nth-child(1)': {
        transform: 'translateY(14px) rotate(45deg)',
      },
      '&:nth-child(2)': {
        opacity: 0,
      },
      '&:nth-child(3)': {
        transform: 'translateY(-14px) rotate(-45deg)',
      },
    }
  }
}));

const HamburgerMenu = ({ toggle, visible }) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <button
      onClick={toggle}
      className={`${classes.menu} ${visible && classes.active}`}
      aria-label={intl.formatMessage({ id: 'menu' })}
    >
      <span className={classes.line} />
      <span className={classes.line} />
      <span className={classes.line} />
    </button>
  )
}

export default HamburgerMenu;
