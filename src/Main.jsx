// side bar of application
import {
  Add,
  DarkMode,
  Logout,
  Message,
  Person,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
 
} from "@mui/material";
import React from "react";

export default function Main() {

 

// const newdiv=document.querySelector('.new');
//   newdiv.addEventListener('click',()=>{
//     document.querySelector('.mess').style.display='none';
//     document.getElementById('home').style.display='block';
//     document.getElementById('answer').style.display='none';
//   })

  return (
    <Stack
      sx={{ borderRight: "1px solid white", width: "20%", alignItems:"space-between" }}
    >
      <Paper>
        <Stack>
          <Box
            sx={{ p: "5px", m: "2px", display: "flex", alignItems: "center" }}
            className='sapline new'
          >
            <IconButton sx={{ mr: "5px" }}>
              <Add />
            </IconButton>
            <Typography variant="h5" fontSize={"18px"}>
              new Chat
            </Typography>
          </Box>
          <Box
            sx={{ p: "5px", m: "3px", display: "flex", alignItems: "center" }}
            className='sapline'
          >
            <IconButton sx={{ mr: "5px" }}>
              <Message />
            </IconButton>
            <Typography variant="h3" fontSize={"13px"}>
              flirtation Request denied{" "}
            </Typography>
          </Box>
           <Box
            sx={{ p: "5px", m: "3px", display: "flex", alignItems: "center" }}
            className='sapline'
          >
            <IconButton sx={{ mr: "5px" }}>
              <Message />
            </IconButton>
            <Typography variant="h3" fontSize={"14px"}>
              ice preacer dating app
            </Typography>
          </Box>
        </Stack>
      </Paper>
      <Box flexGrow={1} mt={'36%'}/>
      <Paper sx={{ borderTop: "1px solid white" }}>
        <Stack>
          <Box
            sx={{ p: "5px", m: "2px", display: "flex", alignItems: "center" }}
            className='sapline'
          >
            <IconButton sx={{ mr: "5px" }}>
              <Person />
            </IconButton>
            <Typography variant="h3" fontSize={"14px"}>
              upgrade to plus
            </Typography>
          </Box>
          <Box
            sx={{ p: "5px", m: "2px", display: "flex", alignItems: "center" }}
            className='sapline'
          >
            <IconButton sx={{ mr: "5px" }}>
              <DarkMode />
            </IconButton>
            <Typography variant="h3" fontSize={"14px"}>
              dark mode
            </Typography>
          </Box>
          <Box
            sx={{ p: "5px", m: "2px", display: "flex", alignItems: "center" }}
            className='sapline'
          >
            <IconButton sx={{ mr: "5px" }}>
              <Logout />
            </IconButton>
            <Typography variant="h3" fontSize={"14px"}>
              log out
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}
