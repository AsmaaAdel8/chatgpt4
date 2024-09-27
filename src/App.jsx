import { Stack } from "@mui/material";
// import Main from "./Main";
import Home from "./Home";
import Header from "./Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Footer from "./Footer";
import Input from "./Input";
import Chatmessages from "./chatmessages";

function App() {
  // const key='org-lj81vath4Vc2XXN3zrnfBvBc';
  const messages=localStorage.getItem('messages');
  const [theme, colorMode] = useMode();
  // const them=useTheme();
  //   const openai = new OpenAI({
  //     organization: "org-lj81vath4Vc2XXN3zrnfBvBc",
  //     // project: "$PROJECT_ID",
  //   });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack sx={{color:theme.palette.text}}>
          <Header />
          {messages?<Chatmessages/>:<Home/>}
          <Input/>
          <Footer/>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
