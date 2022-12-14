import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../features/about/AboutPage";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import HomePage from "../features/home/HomePage";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css'
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
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
      <ToastContainer position="bottom-right" hideProgressBar/>
    <CssBaseline/>
    <Header modeFlip = {modeFlip}  toggle = {darkMode}/>
    
    <Container>
      <Switch>
          <Route exact path = '/' component={HomePage}/>
          <Route exact path = '/catalog' component={Catalog}/>
          <Route path = '/catalog/:id' component={ProductDetails}/>
          <Route path = '/about' component={AboutPage}/>
          <Route path = '/contact' component={ContactPage}/>
          <Route path = '/server-error' component={ServerError}/>
          <Route  component={NotFound}/>
      </Switch>
      


    </Container>
    </ThemeProvider>
   
  );
}

export default App;
