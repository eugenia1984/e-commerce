import { Header } from "./components/header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themeMaterial";
import  SocialMedia  from "./components/SocialMedia";
import Partner from "./components/Partner";
import Cards from "./components/Cards"
import { Banner } from "./components/Banner";
import Products from "./components/Products";
function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <Products />
        <SocialMedia />
        <Partner />
      </ThemeProvider>
    </>
  );
}

export default App;
