import { Send } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  useTheme,
} from "@mui/material";
import lightChat from "./lighticon.png";
import chat from "./darkicon.jpg";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { SendMessagetoopenai } from "./Data";

export default function Home() {
  const them = useTheme();
 const mode=JSON.stringify(localStorage.getItem("mode"));
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      text: "",
      isBot: true,
    },
  ]);
 
  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessage([...message, { text, isBot: false }]);
    const res = await SendMessagetoopenai(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
    console.log(res);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const linkshome = document.querySelectorAll(".subLinkhome");
// console.log(mode);
    linkshome.forEach((item) => {
      // const dat=document.querySelectorAll('h6');
      item.addEventListener("click", () => {
        setInput(item.children[0].innerHTML);
        // to get value of text that inside each box in input
        // console.log(item.children[0].innerHTML);
      });
    });
  }, []);

  return (
    <Box bgcolor={them.palette.background.default} width={"100%"}>
      <Box m={"auto"}>
        <img
          src={mode!=="dark"?lightChat:chat}
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
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="filled"
          value={input}
          id="inp"
          style={{
            backgroundColor:them.palette.background,
            borderRadius: "25px",
            width: "70%",
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        >
          <InputLabel htmlFor="outlined-adornment-message" sx={{borderRadius:"25px"}}>
            Message ChatGPT{" "}
          </InputLabel>
          <OutlinedInput
            id="standard-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleSend}>
                  <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Typography
        textAlign={"center"}
        sx={{
          position: "fixed",
          bottom: 0,
          fontSize: "17px",
          width: "100%",
        }}
      >
        ChatGPT can make mistakes. Check important info.
      </Typography>
    </Box>
  );
}
