import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";

import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useAuth } from "../context/AuthContextProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { mangaContext } from "../context/mangaContext";

const pages = [
  // {
  //   type: "Create",
  //   path: "/create",
  // },
  {
    type: "Cart",
    path: "/cart",
  },
];
const settings = ["Login", "Register"];

function ResponsiveAppBar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  // CreateManga Start
  const { addManga } = useContext(mangaContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [like, setlike] = useState(0);
  const [comments, setComments] = useState("");
  function addForm() {
    if (!title || !img || !price || !type || !description) {
      alert("Some inputs are empty!");
      return;
    }

    let newManga = {
      title,
      img,
      price,
      type,
      description,
      like,
      comments,
    };

    addManga(newManga);

    setTitle("");
    setImg("");
    setPrice("");
    setType("");
    setDescription("");
  }
  // CreateManga End
  const { logout, user } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgb(2, 19, 44)",
        height: "70px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            titles
          </Typography>

          <div>
            {/* <Button onClick={handleOpen}>CreateManga</Button> */}
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            onClick={handleOpen}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CreateManga
          </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <div style={{display:'flex',justifyContent: 'center'}}>
      <div className="InputDiv">
        <TextField
        style={{margin:'8px'}}
          className="Input"
          id="outlined-search"
          label="Title"
          type="search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className="Input"
        style={{margin:'8px'}}
        id="outlined-search"
          label="Img"
          type="search"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <TextField
        style={{margin:'8px'}}
        className="Input"
          id="outlined-search"
          label="Price"
          type="search"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          className="Input"
          id="outlined-search"
          label="Type:horror,Shonen,stragety,comedy"
        style={{margin:'8px'}}
        type="search"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          className="Input"
          id="outlined-search"
          label="Description"
          type="search"
        style={{margin:'8px'}}
        value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={addForm}>
            addManga
          </Button>
        </Stack>
      </div>
    </div>
              </Box>
            </Modal>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(page.path)}
                  >
                    {page.type}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            titles
          </Typography>
          {/* <SideBar /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.type}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.type}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user[0]} src="..." />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    navigate(`/${setting}`);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={logout}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
