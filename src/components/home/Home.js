import { Box, Container, Stack, Typography } from "@mui/material";
import Category from "../category/Category";
import Recents from "../recents/Recents";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Category />
        <hr />

        <Stack direction={"row"} spacing={2} mt={8}>
          <Box flex={3} sx={{padding: "18px 100px 100px 100px"}}>
            <Recents />
          </Box>
          <Box>Rightbar</Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
