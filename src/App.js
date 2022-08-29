
import {Button, Container, Typography, Box, Stack} from '@mui/material';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    <Typography variant="h1"align="center"  sx={{background: "#00027c", color: "#ffffff", fontSize: '12px' }}>Heading</Typography>
      <Button variant="outlined" color="secondary">Text</Button>
      <Container sx={{background: "#7c006b", color:"#ffffff", fontSize: '12px'}}>Hello</Container>
      <Stack direction={"row"} sx={{background: "tomato"}} >
        <Box flex={2} sx={{background: "#04ff57"}} >Box1</Box>
        <Box flex={5} sx={{background: "#ff044f"}} >Box2</Box>
        <Box flex={2} sx={{background: "#6771ff"}} >Box3</Box>
      </Stack>


    </div>
  );
}

export default App;
