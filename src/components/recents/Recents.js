import { Box, Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import cardImage from '../../static/image3.jpg';
import cardImage2 from '../../static/image4.jpg';
import cardImage3 from '../../static/image5.jpg';
import React from 'react'
import Card from '../card/Card';

const Recents = () => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item >
              <Card cardImage={cardImage} />
            </Grid>
            <Grid item xs={6}  >
              <Card cardImage={cardImage2} />
            </Grid>
            <Grid item xs={6}  >
              <Card cardImage={cardImage3} />
            </Grid>
            <Grid item xs={6}  >
              <Card cardImage={cardImage} />
            </Grid>
            <Grid item xs={6}  >
              <Card cardImage={cardImage} />
            </Grid>
        </Grid>
        Recents</Box>
  )
}

export default Recents