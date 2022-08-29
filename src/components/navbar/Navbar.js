import { AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Facebook, Instagram, Menu as MenuIcon, Twitter } from "@mui/icons-material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 50,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });  
  
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Product", Link: "/" },
    { Name: "Portfolio", Link: "/" },
    { Name: "Blog", Link: "/" },
    { Name: "Contact Us", Link: "/" },
  ];

  return (
    <div>
      <AppBar sx={{background: "#000000"}}>
        <StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 300, height: '90vh'}}>
        {MenuItems.map((items) => (
              <MenuItem sx={{ cursor: "pointer", fontSize:'14px' }}>{items.Name} </MenuItem>
            ))}
        </Box>
      </Menu>
          <MenuBox sx={{display: {xs: 'none', sm: 'none', md: "flex"}}}>
           
          </MenuBox>
          <SocialBox>
            <Facebook /> <Instagram /> <Twitter />{" "}
          </SocialBox>
          <SearchBox><InputBase placeholder="Search" sx={{color: "#FFFFff"}} /> 
                <MenuIcon sx={{color: "#FFFFFF", display: {xs: 'block', sm: 'block', md: "none"}}}></MenuIcon>
          </SearchBox>

        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
