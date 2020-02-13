import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '29px',
    margin: 0,
  },
  content: {
    fontSize: '16px',
    lineHeight: '22px',
    margin: '8px 0',
  }
}));

const FooterAddressItem = ({ title, content, col = 3}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={col}>
      <h4 className={classes.title}>{ title }</h4>
      <p className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />
    </Grid>
  )
}

const FooterAddress = () => {
  const intl = useIntl();
  
  return (
    <Grid container>
      <FooterAddressItem
        title={<FormattedMessage id="address" />}
        content={intl.formatMessage({ id: "company.address" })}
      />
      <FooterAddressItem
        title={<FormattedMessage id="office" />}
        content="(+84) 234 3686 896"
      />
      <FooterAddressItem
        title={<FormattedMessage id="phone" />}
        content="(+84) 90 8570 408"
      />
      <FooterAddressItem
        title={<FormattedMessage id="email" />}
        content="info@pkhctech.com"
      />
    </Grid>
  )
}

export default FooterAddress;