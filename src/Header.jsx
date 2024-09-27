import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { forwardRef, Fragment} from "react";
import   { useContext } from "react";
import { ColorModeContext } from "./theme";
import { Avatar, Dialog, DialogActions, IconButton, Slide, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import Sign from "./Sign";
import { deepPurple } from "@mui/material/colors";
import SideBar from "./SideBar";
import { useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const userEmail=localStorage.getItem('email');
  const handleClose = () => {
    setClose(false);
  };
  const handleClickOpen = () => {
    if(!userEmail){
      setOpen(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SideBar open={open}/>
          <Typography variant="h6" component="div" sx={{ textAlign:"left !important", flexGrow:1 }}>
            Chatgpt-4
          </Typography>
          {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined />
        </IconButton>
      )}
          <Button color="inherit" onClick={handleClickOpen}>
            {userEmail?<Avatar sx={{ bgcolor: deepPurple[500] }}>{userEmail.slice(0,2)}</Avatar>:'Login'}
            </Button>
          {/* to handle sign bage in  */}
          <Fragment>
        <Dialog
          open={close}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogActions>
            <Box>
              <Sign handleClose={handleClose}/>
            </Box>
          </DialogActions>
        </Dialog>
      </Fragment>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
