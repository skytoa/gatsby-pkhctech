import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AniLink } from '../../components/TransitionLink';
import { FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'SVN Aguda',
    display: 'flex',
    alignItems: 'baseline',

    '& a': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    }
  },
  title: {
    fontSize: '53px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },

    '&:hover': {
      '& span': {
        color: '#2AA7DE',
      }
    },
    
    '& span': {
      transition: 'all .3s ease-in-out',
      color: '#009FD4',
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
const HeaderTitle = ({ to, title, showMore }) => {
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

HeaderTitle.defaultProps = {
  to: '/',
  title: '',
  showMore: false,
};

HeaderTitle.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  showMore: PropTypes.bool,
}

export default HeaderTitle;
