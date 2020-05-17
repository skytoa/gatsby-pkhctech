import React from 'react';
import { 
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { useIntl } from "gatsby-plugin-intl";
import MajorAreasImg from '../../images/major_areas_img.png';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '60px',
  },
  heading: {
    fontFamily: 'SVN Aguda',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '1em',
  },
  list: {
    listStyle: 'none',
    padding: '0 23px',
  },
  listItem: {
    fontSize: '18px',
    position: 'relative',
    
    '&:before': {
      content: "''",
      position: 'absolute',
      top: '6px',
      left: '-20px',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.background.secondary}`,
    }
  },
  MajorAreasImg: {
    marginTop: '30px',
    width: '100%',
  }
  
}));

const MajorAreas = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container alignItems="stretch">
        <Grid item xs={12} sm={12} md={7}>
          <h2 className={classes.heading}>{intl.formatMessage({ id: "major_areas_of_the_company" })}</h2>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "hardware_circuit_design" })}</p>
            </li>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "design_and_construction_of_industrial_automation_control_system_scada_system" })}</p>
            </li>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "embedded_system_programming" })}</p>
            </li>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "programming_for_plc_devices" })}</p>
            </li>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "designing_and_programming_of_robot_control" })}</p>
            </li>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "developing_iot_applications" })}</p>
            </li>
            <li className={classes.listItem}>
              <p>{intl.formatMessage({ id: "web_and_mobile_application_development" })}</p>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <img class={classes.MajorAreasImg} src={MajorAreasImg} alt={intl.formatMessage({ id: "major_areas_of_the_company" })} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MajorAreas;
