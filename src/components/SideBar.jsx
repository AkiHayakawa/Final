// import React from "react";
// import Box from "@mui/material/Box";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";

// export default function SwipeableTemporaryDrawer() {
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
//       role="presentation"
//       onKeyDown={toggleDrawer(anchor, true)}
//     >
//       <List>
      
//       </List>
//       <Divider />
//       <List>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Toolbar disableGutters>
//         {["left"].map((anchor) => (
//           <div className="SideBar">
//             <React.Fragment key={anchor}>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 href="#"
//                 onClick={toggleDrawer(anchor, true)}
//                 sx={{
//                   mr: 2,
//                   display: { xs: "none", md: "flex" },
//                   fontFamily: "monospace",
//                   fontWeight: 700,
//                   letterSpacing: ".3rem",
//                   color: "inherit",
//                   textDecoration: "none",
//                 }}
//               >
//                 SideBar
//               </Typography>

//               <SwipeableDrawer
//                 style={{ color: "red" }}
//                 anchor={anchor}
//                 open={state[anchor]}
//                 onClose={toggleDrawer(anchor, false)}
//                 onOpen={toggleDrawer(anchor, true)}
//               >
//                 {list(anchor)}
//                 <Button
//                   variant="outlined"
//                   onClick={toggleDrawer(anchor, false)}
//                 >
//                   Close
//                 </Button>
//               </SwipeableDrawer>
//             </React.Fragment>
//           </div>
//         ))}
//       </Toolbar>
//     </div>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MangaSideBar from "./MangaSideBar";
import FilterManga from './FilterManga'
const drawerWidth = 240;

export default function SideBar() {
  return (
    <div className="SideBarBlock">
      <Box sx={{ display: "flex" ,height:"100px",position:'fixed'}}>
        {/* <CssBaseline /> */}

 

          <Toolbar />
           <Box >
             <List>
      <MangaSideBar />
             </List>
            <Divider />
            <List>
        <FilterManga />
            
             </List>
          </Box>
       </Box>
     </div>
   );
 }
