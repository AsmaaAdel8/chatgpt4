import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useTheme,
} from "@mui/material";
import { SendMessagetoopenai } from "./Data";

export default function Input() {
  const them = useTheme();
  const [input, setInput] = useState("");
  const HomeMeessagesLink = localStorage.getItem("textMes");
  const [message, setMessage] = useState([
    {
      text: "",
      isBot: true,
    },
  ]);
  const text = () => {
    // to set home link in messages to start chat
    if (HomeMeessagesLink) {
      document.getElementById("inp").innerHTML = HomeMeessagesLink;
      return HomeMeessagesLink;
    } else {
      return input;
    }
  };
  // setInput(HomeMeessagesLink) // it made error
  // console.log(text());

  const handleSend = async () => {
    let newtext = text();
    if (newtext) {
      // console.log(newtext);
      // setMessage([...message, {text:newtext, isBot: false }]);
      setMessage((prevMessage) => [
        ...prevMessage,
        { text: newtext, isBot: false },
      ]);
      const res = await SendMessagetoopenai(newtext);
      // setMessage([
      //   ...message,
      //   {text:newtext, isBot: false },
      //   { text: res, isBot: true },
      // ]);
      const updatedMessage = [...message, { text: newtext, isBot: false }, { text: res, isBot: true }];
    setMessage(updatedMessage);
      localStorage.setItem("messages", JSON.stringify(message));
      // console.log(res);
    }
    setInput("");
  };
  return (
    <Box>
      <FormControl
        fullWidth
        sx={{ m: 1 }}
        variant="filled"
        value={input}
        id="inp"
        style={{
          backgroundColor: them.palette.background,
          borderRadius: "25px",
          width: "70%",
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      >
        <InputLabel
          htmlFor="outlined-adornment-message"
          sx={{ borderRadius: "25px" }}
        >
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
  );
}
