import React from 'react'
import cafe from '../imagenes/cafe.png'



const Partner = () => {
  return (
    <>
      <div className='contenedor-partner'>
        <h2 className='titulo-partner'>Our  Charity Partner, City Bakery</h2>
        <img className='imagen-partner' src={cafe} alt="cafe" />
      </div>
    </>
  )
}

export default Partner