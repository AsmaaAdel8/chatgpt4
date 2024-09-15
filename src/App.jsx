import { Box } from "@mui/material";
// import Main from "./Main";
import Home from "./Home";
import Header from "./Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  // const key='org-lj81vath4Vc2XXN3zrnfBvBc';
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
        <Box sx={{color:theme.palette.text}}>
          <Header />
          <Home />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
