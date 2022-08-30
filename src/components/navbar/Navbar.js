import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  return (
    <div>
      <AppBar sx={{ background: "#000000" }} position={"static"}>
        <StyledToolbar>
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {MenuItems.map((items) => (
              <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
                {items.Name}{" "}
              </MenuItem>
            ))}
          </MenuBox>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(!open)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box sx={{ width: 300, height: "90vh" }}>
              {MenuItems.map((items) => (
                <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
                  {items.Name}{" "}
                </MenuItem>
              ))}
            </Box>
          </Menu>

          <SocialBox>
            <Facebook /> <Instagram /> <Twitter />{" "}
          </SocialBox>
          <SearchBox>
            <InputBase placeholder="Search" sx={{ color: "#FFFFff" }} />
            <MenuIcon
              sx={{
                color: "#FFFFFF",
                display: { xs: "block", sm: "block", md: "none" },
              }}
              onClick={() => setOpen(!open)}
            />
          </SearchBox>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
