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
} from "@mui/icons-material";


/* ================= STYLES ================= */

const StyledButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "rgba(220, 38, 38, 0.1)",
    color: "#DC2626",
  },
}));

const LoginButton = styled(Button)(() => ({
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#DC2626",
  color: "white",
  fontWeight: 600,
  padding: "8px 24px",
  "&:hover": {
    backgroundColor: "#B91C1C",
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
    backgroundColor: "rgba(220, 38, 38, 0.1)",
    color: "#DC2626",
  },
}));


/* ================= COMPONENT ================= */

export default function Navbar() {

  const navigate = useNavigate();

  /* ---------- Mobile Drawer ---------- */
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------- Profile Menu ---------- */
  const [anchorEl, setAnchorEl] = useState(null);

  /* ---------- Auth State (NO WARNING VERSION) ---------- */
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );


  /* ================= AUTH LISTENER ================= */

  useEffect(() => {

    const updateAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("authChanged", updateAuth);

    return () => {
      window.removeEventListener("authChanged", updateAuth);
    };

  }, []);


  /* ================= HANDLERS ================= */

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.dispatchEvent(new Event("authChanged"));

    handleProfileMenuClose();

    navigate("/signin");
  };


  /* ================= MENU ITEMS ================= */

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Library", path: "/library" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
  ];


  /* ================= JSX ================= */

  return (

    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
        borderBottom: "2px solid #DC2626",
      }}
    >

      <Toolbar className="flex justify-between px-4 md:px-8 py-3">


        {/* ========= LOGO ========= */}

        <Link to="/" className="no-underline">

          <h1 className="text-2xl md:text-3xl font-bold">

            <span className="text-red-600">Crave</span>
            <span className="text-white">Tech</span>

          </h1>

        </Link>



        {/* ========= DESKTOP MENU ========= */}

        <div className="hidden lg:flex items-center space-x-2">

          {menuItems.map((item) => (

            <StyledButton
              key={item.name}
              component={Link}
              to={item.path}
            >
              {item.name}
            </StyledButton>

          ))}


          {/* ===== AUTH SECTION ===== */}

          {isLoggedIn ? (

            <>
              <IconButton onClick={handleProfileMenuOpen}>

                <Avatar sx={{ bgcolor: "#DC2626" }}>
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

                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>

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
            backgroundColor: "#000",
            borderLeft: "2px solid #DC2626",
          },
        }}
      >

        <div className="flex flex-col h-full">


          {/* HEADER */}

          <div className="flex justify-between items-center p-4">

            <h2 className="text-xl font-bold">

              <span className="text-red-600">Crave</span>
              <span className="text-white">Tech</span>

            </h2>

            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>

          </div>


          {/* MENU */}

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


          {/* AUTH */}

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
