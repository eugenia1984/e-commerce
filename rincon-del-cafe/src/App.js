import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themeMaterial";

function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
