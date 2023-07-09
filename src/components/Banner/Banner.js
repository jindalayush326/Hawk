// using coingecko api
import React from 'react'
import {  makeStyles } from "@mui/styles";
import Carousel from './Carousel';
import { Container, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    banner: {
      backgroundImage: "url(./banner.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        backgroundRepeat  : 'no-repeat',
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
    }));
const Banner = () => {
    const classes = useStyles();

  return (
    <div className={classes.banner}>
     <Container className={classes.bannerContent}>
<div className={classes.tagline}>
<Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            HAWK
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite startup     
          </Typography>
</div>
<Carousel/>
     </Container>
    </div>
  )
}

export default Banner
