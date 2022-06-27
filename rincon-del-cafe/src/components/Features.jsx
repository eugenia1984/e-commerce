import { Box, Container } from "@mui/system";
import React from "react";
import cafe from "../assets/images/cafe.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FlexboxProps } from "@mui/system";


const Features = () => {
  return (
    <>
      <Container>
        <Box display= "flex"
        
               sx={{ paddingTop: 6 }}>
          <div>
            <h3><span style={{color: "#ec072a"}}>Who Makes </span>  Your Coffe?</h3> <br />
            <p>
              Our mission is to help grow the local coffe ecosystem in BA and
              across Argentina. Why?
            </p> <br />
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{position: "absolute" ,top: "165px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>  
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{position: "absolute" ,top: "193px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{position: "absolute" ,top: "221px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{position: "absolute" ,top: "249px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            <span style={{position: "absolute" ,top: "277px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span> 
            </p>
            <button style={{position: "absolute", top: "333px"}} >Discover our Producers</button>
          </div>

          <img src={cafe} alt="coffe" width={"600"} height={"auto"} />
        </Box>
      </Container>
    </>
  );
};

export { Features };
