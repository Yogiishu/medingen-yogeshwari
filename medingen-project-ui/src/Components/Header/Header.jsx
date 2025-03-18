import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Home, LocalOffer, Notifications, Person } from "@mui/icons-material";
import { styled } from "@mui/system";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import logo from "../../assets/migfulllogo.png";

const NavContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 20px",
});

const MenuItems = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "30px",
});

const IconBox = styled(Box)(({ active }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: active ? "#000" : "#aaa",
  fontWeight: active ? "bold" : "normal",
  backgroundColor: active ? "#f5f3ff" : "transparent",
  padding: "10px 15px",
  borderRadius: "20px",
  gap: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#ece7ff",
  },
}));

const Header = () => {
  const [activePage, setActivePage] = useState("Home");

  const handleClick = (page) => {
    setActivePage(page); // Update active state when clicked
    console.log(`Navigating to ${page}`);
  };

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <NavContainer>
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center",color:"#000",justifyContent:"center" }}
            >
              <Box sx={{margin:"8px 6px 0px 0px"}}>
                <img src={logo} alt="Preview" width="50px" />
              </Box>
              <Typography>
              Medingen
              </Typography>
            </Typography>
            <MenuItems>
              <IconBox
                active={activePage === "Home"}
                onClick={() => handleClick("Home")}
              >
                <Home />
                <Typography variant="body2">Home</Typography>
              </IconBox>
              <IconBox
                active={activePage === "Offers"}
                onClick={() => handleClick("Offers")}
              >
                <LocalOffer />
                <Typography variant="body2">Offers</Typography>
              </IconBox>
              <IconBox
                active={activePage === "Notifications"}
                onClick={() => handleClick("Notifications")}
              >
                <Notifications />
                <Typography variant="body2">Notifications</Typography>
              </IconBox>
              <IconBox
                active={activePage === "Profile"}
                onClick={() => handleClick("Profile")}
              >
                <Person />
                <Typography variant="body2">Profile</Typography>
              </IconBox>
            </MenuItems>
            <IconButton sx={{ boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)" }}>
              <LocalGroceryStoreOutlinedIcon />
            </IconButton>
          </NavContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
