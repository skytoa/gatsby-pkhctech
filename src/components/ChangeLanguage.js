import React from 'react';
import { IntlContextConsumer, changeLocale, FormattedMessage } from "gatsby-plugin-intl";
import { LANGUAGE_EN, LANGUAGE_VI } from '../modules/constants';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    color: '#fff',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const languageName = {
  en: LANGUAGE_EN,
  vi: LANGUAGE_VI,
}

const ChangeLanguage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.button}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          startIcon={<TranslateIcon />}
        >
          <FormattedMessage id="current_language" />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) =>
                        languages.map(language => (
                          <MenuItem 
                            key={language}
                            onClick={() => changeLocale(language)}
                            style={{
                              color: currentLocale === language ? `blue` : `#222`,
                            }}
                          >
                            {languageName[language]}
                          </MenuItem>
                        ))
                      }
                    </IntlContextConsumer>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default ChangeLanguage;