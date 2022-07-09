import React from "react";
import cafe from '../../imagenes/cafe.png'

const Logo = () => {
  return <div>
        <img className='imagen-logo' src={cafe} alt="cafe" />
  </div>;
};

export { Logo };
