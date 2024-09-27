import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box>
    <Typography
        textAlign={"center"}
        sx={{
          position: "fixed",
          bottom: 0,
          fontSize: "17px",
          width: "100%",
          bgcolor:"black"
        }}
      >
        ChatGPT can make mistakes. Check important info.
      </Typography>
    </Box>
  )
}
