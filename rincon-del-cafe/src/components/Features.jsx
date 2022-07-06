import { Box, Container } from "@mui/system";
import React from "react";
import cafe from "../assets/images/cafe.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BtnPrimary } from "./BtnPrimary";
import { styled } from "@mui/system";
import "./features.css";

const Features = () => {
  function change() {
    window.open("https://camaraargentinacafe.com.ar/", "_blank");
  }

  return (
    <>
      <div className="contenedor"
    
      >
        <div className="div1">
          <h3>
            <span className="h3-span">Cómo Se Hace </span> Tu Café?
          </h3>
          <br />
          <p>
            Nuestra misión es ayudar a hacer crecer el ecosistema local de café
            en toda Argentina. ¿Por qué?
          </p>
          <br />
          <p>
            <CheckCircleIcon sx={{ color: "primary.main" }} />
            <span>Porque nos conecta con la tierra en la que vivimos.</span>
          </p>
          <p>
            <CheckCircleIcon sx={{ color: "primary.main" }} />
            <span>
              Porque sabemos que el mejor producto viene de nuestras raíces.
            </span>
          </p>
          <p>
            <CheckCircleIcon sx={{ color: "primary.main" }} />
            <span>
              Porque la buena comida local hace de nuestro rincón del mundo un
              lugar mejor.
            </span>
          </p>
          <p>
            <CheckCircleIcon sx={{ color: "primary.main" }} />
            <span>Porque apoya empleos locales.</span>
          </p>
          <p>
            <CheckCircleIcon sx={{ color: "primary.main" }} />
            <span>Porque tiene más sentido para el medio ambiente.</span>
          </p>
          <br />
          <BtnPrimary name="Discover Our Producers" function={change} />
        </div>
        <Box>
          <img src={cafe} alt="cafe" />
        </Box>
      </div>
    </>
  );
};

export { Features };
