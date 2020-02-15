import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AniLink } from '../../components/TransitionLink';
import { FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import HeaderBGDot from '../../images/header-bg-dot.svg';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'SVN Aguda',
    display: 'flex',
    alignItems: 'baseline',
    position: 'relative',

    '&:before': {
      content: "''",
      width: '590px',
      height: '1000px',
      transform: 'skew(12deg)',
      background: theme.palette.background.secondary,
      position: 'absolute',
      zIndex: '-2',
    },

    '& a': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    }
  },
  title: {
    fontSize: '53px',
    position: 'relative',
    padding: '45px 0',

    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },

    '&:hover': {
      '& span': {
        color: '#5E39BC',
      }
    },

    '&:before': {
      content: "''",
      background: `url(${HeaderBGDot})`,
      width: '340px',
      height: '220px',
      position: 'absolute',
      top: '-12px',
      left: '-10px',
      zIndex: '-1',
    },

    '& a': {
      color: '#fff',
    },
    
    '& span': {
      transition: 'all .3s ease-in-out',
      color: '#2AA7DE',
    }
  },
  view_more: {
    fontSize: '20px',
    marginLeft: 'auto',

    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  }
}));
const HeaderTitleDot = ({ to = "/", title = "", showMore }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>
        <AniLink to={to} dangerouslySetInnerHTML={{ __html: title }} />
      </h2>
      {
        showMore && (
          <div className={classes.view_more}>
            <AniLink to={to}>
              <FormattedMessage id="view_more" />
            </AniLink>
          </div>
        )
      }
    </div>
  )
}

HeaderTitleDot.defaultProps = {
  to: '/',
  title: '',
  showMore: false,
};

HeaderTitleDot.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  showMore: PropTypes.bool,
}

export default HeaderTitleDot;