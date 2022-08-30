import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import kidsImage from '../../static/kids.jpg';
import womanImage from '../../static/woman.jpg';
import menImage from '../../static/men.jpg';

const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

})

const StyledTypography = styled(Typography)({
    margin: '25% 50px 25% 50px',
    background: '#FFFFFF',
    opacity: '0.8'
})

const Category = () => {
  return (
    <div>
      <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 1, sm: 2, md: 4}} mt={5}>
        <StyledBox sx={{backgroundImage: `url(${kidsImage})`}}> <StyledTypography align="center" variant="h3">Kids</StyledTypography> </StyledBox>
        <StyledBox sx={{backgroundImage: `url(${menImage})`}}> <StyledTypography align="center" variant="h3">Men</StyledTypography> </StyledBox>
        <StyledBox sx={{backgroundImage: `url(${womanImage})`}}> <StyledTypography align="center" variant="h3">Women</StyledTypography> </StyledBox>
      </Stack>
    </div>
  );
};

export default Category;
