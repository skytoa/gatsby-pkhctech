import React from 'react';
import { makeStyles } from '@material-ui/core';
import { APP_THEME } from '../../types/theme';

const useStyles = makeStyles(theme => ({
  svg: {
    zIndex: 2,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    
  },
  cls_1: {
    fill: '#575a89',
  },
  cls_2: {
    opacity: '0.1',
  },
  cls_3: {
    fill: '#a0616a',
  },
  cls_4: {
    fill: '#2f2e41',
  },
  cls_5: {
    fill: theme.palette.type === APP_THEME.LIGHT ? '#fff' : `${theme.palette.background.secondary}`,
  }
}));

const RequestImage = () => {
  const classes = useStyles();
  
  return (
    <div>
      <svg id="undraw_fill_forms_yltj" xmlns="http://www.w3.org/2000/svg" width="223" height="471" viewBox="0 0 266.529 570.785" className={classes.svg}>
        <path id="Path_64" data-name="Path 64" className={classes.cls_1} d="M340.761,306.128s11.934,3.59,21.31,25.132a108.982,108.982,0,0,0,5.112,10.14c9.6,17.015,13.641,76.923,13.641,76.923L335.647,391.4Z" transform="translate(-122.006 -146.39)"/>
        <path id="Path_65" data-name="Path 65" className={classes.cls_2} d="M340.761,306.128s11.934,3.59,21.31,25.132,27.531,40.935,18.753,87.063L335.647,391.4Z" transform="translate(-120.499 -144.802)"/>
        <path id="Path_66" data-name="Path 66" className={classes.cls_3} d="M115.793,125.975l7.672,51.161,52.849,2.693-5.967-75.395Z" transform="translate(-17.092 -10.699)"/>
        <path id="Path_67" data-name="Path 67" className={classes.cls_4} d="M143.7,638.678,141.147,751.77h80.125l11.934-44.878,9.376,44.878h83.535s1.7-129.248-7.672-130.146S143.7,638.678,143.7,638.678Z" transform="translate(-100.835 -181.882)"/>
        <ellipse id="Ellipse_12" data-name="Ellipse 12" className={classes.cls_3} cx="46.029" cy="48.468" rx="46.029" ry="48.468" transform="translate(69.72 31.804)"/>
        <path id="Path_68" data-name="Path 68" className={classes.cls_1} d="M137.319,609.051l23.867-123.863L129.647,320.936l72.636-28.7,35.618-4.509,17.906-3.52,12.78,3.52s51.144,13.463,53.7,23.336-10.229,90.653-10.229,90.653l-11.934,66.419L326.551,587.51S216.592,627,139.023,609.051Z" transform="translate(-99.137 -147.318)"/>
        <path id="Path_69" data-name="Path 69" className={classes.cls_2} d="M82.293,243.934v33.209l100.576.145L87.407,266.373Z" transform="translate(-12.147 -24.99)"/>
        <path id="Path_70" data-name="Path 70" className={classes.cls_2} d="M72.159,343.95l126.269-19.016L72.159,362.592Z" transform="translate(-10.651 -33.288)"/>
        <path id="Path_71" data-name="Path 71" className={classes.cls_2} d="M304.949,248.934,291.412,300.3Z" transform="translate(-43.013 -25.502)"/>
        <path id="Path_72" data-name="Path 72" className={classes.cls_4} d="M256.588,163.358l8.464-3.568s-17.7-20.517-42.322-18.733l6.926-8.028s-16.929-7.136-32.318,11.6c-8.09,9.847-17.45,21.423-23.286,34.462h-9.064l3.783,8.772-13.241,8.772,13.591-1.576a51.582,51.582,0,0,0-.369,14.549,19.092,19.092,0,0,0,6.547,12.315h0s10.5-22.88,10.5-26.448v8.92s8.464-8.028,8.464-13.381l4.617,6.244,2.308-9.813,28.471,9.813-4.617-8.028,17.7,2.676-6.926-9.813s20.007,11.6,20.776,21.409,6.625,19.11,6.625,19.11S278.9,176.738,256.588,163.358Z" transform="translate(-102.957 -131.694)"/>
        <path id="Path_75" data-name="Path 75" className={classes.cls_5} d="M0,0H67.671V359.92H0Z" transform="translate(198.858 210.866)"/>
        <path id="Path_73" data-name="Path 73" className={classes.cls_3} d="M299.647,416.683s74.159-11.668,85.24,5.385S306.466,448.1,306.466,448.1Z" transform="translate(-124.23 -160.491)"/>
        <path id="Path_74" data-name="Path 74" className={classes.cls_1} d="M132.888,324.128h-5.341a8.47,8.47,0,0,0-5.929,2.43c-5.07,4.957-15.79,17.749-20.269,40.653-5.967,30.517-16.2,89.755,6.819,94.243S282.058,444.4,282.058,444.4l-11.081-41.287-109.107.9s1.7-19.746-1.7-32.312S132.888,324.128,132.888,324.128Z" transform="translate(-93.854 -151.408)"/>
      </svg>
    </div>
  )
}

export default RequestImage;
