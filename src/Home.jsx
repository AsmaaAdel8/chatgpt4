import lightChat from "./lighticon.png";
import chat from "./darkicon.jpg";
import Typography from "@mui/material/Typography";
import { Box, Stack, useTheme } from "@mui/material";
import { useLayoutEffect } from "react";

export default function Home() {
  const them = useTheme();
  const mode = JSON.stringify(localStorage.getItem("mode"));
  const homeLinks = document.querySelectorAll(".subLinkhome");

  useLayoutEffect(()=>{
    homeLinks.forEach((item) => {
      item.addEventListener("click", (e) => {
      //  console.log(e.target.textContent);
      localStorage.setItem('textMes',e.target.textContent)
      });
    });
  },[homeLinks])
  return (
    <Box bgcolor={them.palette.background.default} width={"100%"}>
      <Box m={"auto"}>
        <img
          src={mode !== "dark" ? lightChat : chat}
          alt="chatgpt logo"
          draggable="false"
          height={70}
          style={{ marginTop: "2%", borderRadius: "55%" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "auto",
            mt: "11.5%",
            overflow: "auto",
            width: "50%",
          }}
        >
          <Stack>
            <Box className="subLinkhome">
              <Typography variant="h6" m={1}>
                explain quantum
                <br />
                computing in simple terms
              </Typography>
            </Box>
            <Box className="subLinkhome">
              <Typography variant="h6" m={1}>
                how do i
                <br /> make an HTTP request in js
              </Typography>
            </Box>
          </Stack>
          <Stack>
            <Box className="subLinkhome">
              <Typography variant="h6" m={1}>
                Quiz me on world capitals
                <br /> to enhance my geography skills
              </Typography>
            </Box>
            <Box className="subLinkhome">
              <Typography variant="h6" m={1}>
                create a workout plan
                <br /> for resistance training
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
