import { Box } from "@mui/material";
import React from "react";
import { BtnPrimary } from "./BtnPrimary";
import boxcafe from "../assets/images/boxcafe.jpg";
import "./features.css";
import { Container } from "@mui/system";

const Combo = () => {
  function comprar() {
    var answer = window.confirm("Serás redirigido a otra página");
    if (answer === true) {
      window.open("https://google.com");
    }
  }
  return (
    <>
      <div className="contenedor-combo">
        <Box margin="10px">
          <img src={boxcafe} alt="cafe" />
        </Box>
        <Box sx={{ height: "auto" }} margin="10px">
          <h3>
            <span className="h3-span">Sorprende a Alguien </span>
            <br /> Trabajando desde Casa
          </h3>
          <br />
          <p className="parrafo">
            ¿Tiene un colega o familiar trabajando duro en casa? Nuestra caja de
            bocadillos y bebidas Working From Home es la manera perfecta de
            poner una sonrisa en su rostro, entregada directamente en su puerta.
            Para comprar para un gran grupo de personas, póngase en contacto y
            podemos discutir paquetes a medida y mensajes personalizados.
          </p>
          <br />

          <br />
          <BtnPrimary name="Buy Now" function={comprar} />
        </Box>
      </div>
    </>
  );
};

export { Combo };
