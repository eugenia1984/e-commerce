import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ec072a",
      },
      secondary: {
        main: "#505011",
      },
    },
  });

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
