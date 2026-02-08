// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Library", path: "/library" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
  ];

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
        <Link to="/" className="no-underline">
          <h1
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-red-600">Crave</span>
            <span className="text-white">Tech</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <StyledButton
              key={item.name}
              component={Link}
              to={item.path}
              className="px-4"
            >
              {item.name}
            </StyledButton>
          ))}

          <LoginButton onClick={() => navigate("/signin")}>Sign In</LoginButton>
        </div>

        {/* Mobile Menu Toggle */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", lg: "none" },
            color: "#FFFFFF",
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
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold">
              <span className="text-red-600">Crave</span>
              <span className="text-white">Tech</span>
            </h2>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#FFFFFF" }}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Menu */}
          <List className="flex-1 pt-4">
            {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <MobileMenuButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                >
                  {item.name}
                </MobileMenuButton>
              </ListItem>
            ))}
          </List>

          {/* Auth Button */}
          <div className="p-4 border-t border-gray-800">
            <LoginButton
              fullWidth
              onClick={() => {
                navigate("/signin");
                handleDrawerToggle();
              }}
            >
              Sign In
            </LoginButton>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
