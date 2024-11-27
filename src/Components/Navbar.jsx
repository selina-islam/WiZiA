// components/Navbar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Buttons from "./Buttons";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#001E26",
          padding: "10px 20px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Typography>
            <img src="/Logo.png" alt="Logo" style={{ height: "20px" }} />
          </Typography>

          {/* Desktop Navigation Links and Buttons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <Button color="inherit" sx={{ color: "#fff", fontSize: "14px" }}>
              About Us
            </Button>
            <Button color="inherit" sx={{ color: "#fff", fontSize: "14px" }}>
              Pricing
            </Button>
            <Button color="inherit" sx={{ color: "#fff", fontSize: "14px" }}>
              Customers
            </Button>
            <Button color="inherit" sx={{ color: "#fff", fontSize: "14px" }}>
              Solutions
            </Button>
            <Buttons className="bg-electricCyan px-[16px] py-[10px] font-workSans xl:ml-44">
              Book a Demo
            </Buttons>
            <Buttons className="px-[16px] py-[10px] font-workSans border border-solid border-[#53FFFC33] text-white">
              Contact Us
            </Buttons>
          </Box>

          {/* Mobile Menu */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            {["About Us", "Pricing", "Customers", "Solutions"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ padding: "10px"}}>
            <Buttons className="bg-electricCyan px-[16px] py-[10px] font-workSans mb-5">
              Book a Demo
            </Buttons>
            <Buttons className="px-[16px] py-[10px] font-workSans border border-solid border-slate-800 text-black">
              Contact Us
            </Buttons>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
