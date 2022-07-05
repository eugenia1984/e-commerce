import { Box, Container, } from "@mui/system";
import React from "react";
import cafe from "../assets/images/cafe.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BtnPrimary } from "./BtnPrimary";
import { styled } from '@mui/system';


const Features = () => {
function change(){
  alert("hola")
}

  return (
    <>
     
        <Box  
        paddingTop='50px'
        display='flex' flexWrap='wrap' justifyContent='space-around' 
        >
          <Box sx={{height: "auto"}}
          >
            <h3><span style={{color: "#ec072a"}}>Cómo Se Hace </span>  Tu Café?</h3> <br />
            <p>
              Nuestra misión es ayudar a hacer crecer el ecosistema local de café  en toda Argentina. ¿Por qué?
            </p> <br />
            <p style={{display: "flex", alignItems: "center"}}>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{marginLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>  
            </p>
            <p style={{display: "flex", alignItems: "center"}}>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{marginLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p>
            <p style={{display: "flex", alignItems: "center"}}>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{marginLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p>
            <p style={{display: "flex", alignItems: "center"}}>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{marginLeft: "10px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </span>
            </p>
            <p style={{display: "flex", alignItems: "center"}}>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{marginLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p> <br />
            
            <BtnPrimary name="Discover Our Producers" function={change}/>
          </Box>
          <Box >
            <img src={cafe} alt="" style={{height:"251.7px", alignSelf: "flex-start"}}/>
          </Box>
          
          
        </Box>
     
    </>
  );
};

export { Features };
