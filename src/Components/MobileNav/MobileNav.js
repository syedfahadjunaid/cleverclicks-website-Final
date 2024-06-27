import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { pink, yellow } from "@mui/material/colors";

import { internalLinks } from "../../internalLinks";

import MenuIcon from "@mui/icons-material/Menu";

import favIconImg from "../../Assets/Logos/FavIcon.png";

import { Link } from "react-router-dom";

import MobileNavMenuIconImg from "../../Assets/NavBar/MobileNavMenuIconImg.png";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import "./MobileNav.css";

import MainLogo from "../../Assets/Logos/MainLogo.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function MobileNav({ handleShrink }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    handleShrink();

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List className='mobile-nav-list'>
        <ListItem className='mobile-nav-list-item'>
          <ListItemButton>
            <Link to={internalLinks.home}>
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to={internalLinks.aboutUs}>
              <ListItemText>About Us</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem className='services-list'>
          <ListItemText>Services</ListItemText>
          <List className='services-list-sub-list'>
            <ListItem>
              <Link to={internalLinks.services.webDev}>
                <ListItemText>Web Development</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={internalLinks.services.branding}>
                <ListItemText>Branding</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={internalLinks.services.creativeDesign}>
                <ListItemText>Creative Designing</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={internalLinks.services.seo}>
                <ListItemText>Search Engine Optimization</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={internalLinks.services.socialMediaManagement}>
                <ListItemText>Social Media Management</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={internalLinks.services.performanceMarketing}>
                <ListItemText>Performance Marketing</ListItemText>
              </Link>
            </ListItem>
          </List>
        </ListItem>
        {/* <ListItem>
          <ListItemButton>
            <Link to={internalLinks.project}>
              <ListItemText>Project</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem> */}
        <ListItem>
          <ListItemButton>
            <Link to={internalLinks.contact}>
              <ListItemText>Contact</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to={"/StaffAugmentation"}>
              <ListItemText>Staff Augmentation</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='mobile-nav'>
      <div className='mobile-nav-logo'>
        <Link to={internalLinks.home}>
          <img src={MainLogo} alt='Nav Rec' />
        </Link>
      </div>
      <MenuIcon onClick={toggleDrawer("right", true)} />
      <React.Fragment className='mobile-nav-drawer-container'>
        <Drawer
          className='mobile-nav-drawer'
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}>
          <ExitToAppIcon
            sx={{ color: yellow[700], fontSize: 40 }}
            onClick={toggleDrawer("right", false)}
          />
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
