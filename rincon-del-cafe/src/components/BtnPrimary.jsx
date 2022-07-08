import { Button } from "@mui/material";
import React from "react";



const BtnPrimary = (props) => {

  return (
    <Button onClick={props.function} color="primary" variant="contained">{props.name}</Button>
  )
};

export { BtnPrimary };