import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from '../../static/HeroImage.JPG'

const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 800 }}>
        Fashions <b style={{ color: "#ff1f1f" }}>Blog</b>{" "}
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We make you look the better of You!
      </Typography>
      <Box sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 600,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>

      <Box sx={{ width: {xs:'100%', sm: "50%", md: "40%"}, padding: {xs:3, sm: 2, md: 20} }}>

      <Box sx={{background: "#ffffff", opacity: "0.6"}}>
        <Typography variant="h6" color="tomato" align="center" pt={8}>Trending Styles</Typography>
        <Typography variant="h4" align="center">Life is Boring without Fashion</Typography>
        <Typography variant="body1" align="center" pt={8}>we love to change your style</Typography>
      </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Hero;
