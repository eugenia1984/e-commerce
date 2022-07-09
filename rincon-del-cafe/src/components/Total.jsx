import React from 'react'
import accounting from 'accounting'
import { BtnPrimary } from './BtnPrimary'

const Total = () => {
  return (
    <div>
        <h5>Total Items: 3</h5>
        <h5>{accounting.formatNumber(20000, "$")}</h5>
        <BtnPrimary />
    </div>
  )
  
}
export default Total
