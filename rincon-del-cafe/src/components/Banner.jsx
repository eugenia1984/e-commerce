import React from "react";
import { BtnPrimary } from './BtnPrimary'



const Banner = () => {
  return <div className="banner" style={{display:"flex", flexDirection:"column"}}>
          <div style={{width:"auto", display:"inline-block", margin:"0", textAlign:"center"}}>
            <div style={{display:"flex", flexDirection:"row-reverse", height:"100%"} }> 
              <h2 style={{fontSize:"30px", color:"Red" , backgroundColor:"beige",textAlign:"right", margin:"30px", width:"350px"}}>Descubre las Marcas y sus Historias</h2>
            </div>
            <div style={{display:"flex", flexDirection:"row-reverse"}}>
              <BtnPrimary name="Explorar nuestro Cafe"/>
            </div>
          </div>
        </div>;

};

export { Banner };
