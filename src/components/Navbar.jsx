// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  AccountCircle,
  Movie as MovieIcon,
} from "@mui/icons-material";

/* ================= STYLES ================= */

const StyledButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "rgba(241, 182, 33, 0.15)",
    color: "#F1B621",
  },
}));

const LoginButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#F1B621",
  color: "#0F172A",
  fontWeight: 600,
  padding: "8px 24px",
  "&:hover": {
    backgroundColor: "#E0A900",
  },
}));

const MobileMenuButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#FFFFFF",
  width: "100%",
  justifyContent: "flex-start",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "rgba(241, 182, 33, 0.15)",
    color: "#F1B621",
  },
}));

/* ================= COMPONENT ================= */

export default function Navbar() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  useEffect(() => {
    const updateAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("authChanged", updateAuth);
    return () => window.removeEventListener("authChanged", updateAuth);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleProfileMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChanged"));
    handleProfileMenuClose();
    navigate("/signin");
  };

  /* ================= MENU ITEMS ================= */

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Explore", path: "/explore" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0F172A",
        borderBottom: "2px solid #F1B621",
      }}
    >
      <Toolbar className="flex justify-between px-4 md:px-8 py-3">
        {/* ========= LOGO ========= */}
        <Link to="/" className="no-underline flex items-center gap-2">
          <MovieIcon sx={{ color: "#F1B621", fontSize: 32 }} />
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#F1B621]">Crave</span>
            <span className="text-white">Hub</span>
          </h1>
        </Link>

        {/* ========= DESKTOP MENU ========= */}
        <div className="hidden lg:flex items-center space-x-2">
          {menuItems.map((item) => (
            <StyledButton key={item.name} component={Link} to={item.path}>
              {item.name}
            </StyledButton>
          ))}

          {isLoggedIn ? (
            <>
              <IconButton onClick={handleProfileMenuOpen}>
                <Avatar sx={{ bgcolor: "#F1B621", color: "#0F172A" }}>
                  <AccountCircle />
                </Avatar>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    handleProfileMenuClose();
                  }}
                >
                  Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <LoginButton onClick={() => navigate("/signin")}>
              Sign In
            </LoginButton>
          )}
        </div>

        {/* ========= MOBILE MENU BUTTON ========= */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "flex", lg: "none" }, color: "#FFFFFF" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* ========= MOBILE DRAWER ========= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "280px",
            backgroundColor: "#0F172A",
            borderLeft: "2px solid #F1B621",
          },
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold text-white">
              Movie<span className="text-[#F1B621]">Hub</span>
            </h2>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          </div>

          <List>
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

          <div className="p-4 mt-auto">
            {isLoggedIn ? (
              <LoginButton fullWidth onClick={handleLogout}>
                Logout
              </LoginButton>
            ) : (
              <LoginButton
                fullWidth
                onClick={() => {
                  navigate("/signin");
                  handleDrawerToggle();
                }}
              >
                Sign In
              </LoginButton>
            )}
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
