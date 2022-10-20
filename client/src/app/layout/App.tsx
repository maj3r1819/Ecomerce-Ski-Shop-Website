import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import Catalog from "../features/catalog/Catalog";
import Header from "./Header";
function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palletteTheme = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palletteTheme,
      background : {
        default : palletteTheme === 'light' ? '#eaeaea' : '#121212'
      }
    },
  });
  function modeFlip() {
    setDarkMode(!darkMode)
  }
  
 
  return (
    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <Header modeFlip = {modeFlip}  toggle = {darkMode}/>
    
    <Container>
      <Catalog />
    </Container>
    </ThemeProvider>
   
  );
}

export default App;
