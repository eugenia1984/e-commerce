import { Box, Container } from "@mui/system";
import React from "react";
import cafe from "../assets/images/cafe.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Features = () => {
  return (
    <>
      <Container>
        <Box display="flex" sx={{ paddingTop: 6 }}>
          <div>
            <h3>Who Makes Your Coffe?</h3> <br />
            <p>
              Our mission is to help grow the local food ecosystem in BA and
              across Argentina. Why?
            </p> <br />
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            </p>
            <p>
            <CheckCircleIcon sx={{color: "primary.main"}}/> 
            </p>
          </div>

          <img src={cafe} alt="" width={"600"} height={"auto"} />
        </Box>
      </Container>
    </>
  );
};

export { Features };
