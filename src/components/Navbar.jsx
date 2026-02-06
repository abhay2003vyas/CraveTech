// src/components/Navbar.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const StyledButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "rgba(220, 38, 38, 0.1)",
    color: "#DC2626",
  },
  transition: "all 0.3s ease",
}));

const LoginButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#DC2626",
  color: "white",
  fontWeight: 600,
  padding: "8px 24px",
  "&:hover": {
    backgroundColor: "#B91C1C",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(220, 38, 38, 0.4)",
  },
  transition: "all 0.3s ease",
}));

const MobileMenuButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#FFFFFF",
  width: "100%",
  justifyContent: "flex-start",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "rgba(220, 38, 38, 0.1)",
    color: "#DC2626",
  },
  transition: "all 0.3s ease",
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Home", "Library", "Features", "Contact"];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#000000",
        borderBottom: "2px solid #DC2626",
      }}
    >
      <Toolbar className="flex justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-bold tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span className="text-red-600">Crave</span>
          <span className="text-white">Tech</span>
        </h1>

        {/* Desktop Menu - Hidden on tablet and mobile */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <StyledButton key={item} className="px-4">
              {item}
            </StyledButton>
          ))}
          <LoginButton variant="contained" className="ml-2">
            Sign In
          </LoginButton>
        </div>

        {/* Mobile Menu Toggle - Visible on tablet and mobile only */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", lg: "none" },
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "rgba(220, 38, 38, 0.1)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "280px",
            backgroundColor: "#000000",
            borderLeft: "2px solid #DC2626",
          },
        }}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-red-600">Crave</span>
              <span className="text-white">Tech</span>
            </h2>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#FFFFFF" }}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Menu Items */}
          <List className="flex-1 pt-4">
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <MobileMenuButton onClick={handleDrawerToggle}>
                  {item}
                </MobileMenuButton>
              </ListItem>
            ))}
          </List>

          {/* Login Button */}
          <div className="p-4 border-t border-gray-800">
            <LoginButton
              variant="contained"
              fullWidth
              onClick={handleDrawerToggle}
            >
              Sign In
            </LoginButton>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
