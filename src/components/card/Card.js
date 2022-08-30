import { Box, Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

const Card = ({cardImage}) => {
  return (
    <Box>

            <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={cardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" align="center" component="div" color={'tomato'} >PERFUMES</Typography>
        <Typography gutterBottom variant="h5" align="center" component="div" >Buybacks and dividends have been one of the few bright</Typography>
        <Typography gutterBottom variant="body2" align="center" component="div" >“They’re going where they’re wanted”</Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

</Box>
  )
}

export default Card