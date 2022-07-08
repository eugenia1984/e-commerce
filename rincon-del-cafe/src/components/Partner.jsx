import React from 'react'
import cafe from '../imagenes/cafe.png'
import { BtnPrimary } from './BtnPrimary'



const Partner = () => {
  return (
    <>
      <div className='contenedor-partner'>
        <h2 className='titulo-partner'>Nuestro Rincón de Café</h2>
        <img className='imagen-partner' src={cafe} alt="cafe" />
        <BtnPrimary name="Lea Mas Acerca del Rincon Del Cafe"/>

      </div>
    </>
  )
}

export default Partner