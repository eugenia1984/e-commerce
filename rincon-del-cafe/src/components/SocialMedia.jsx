import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faWhatsapp, faFacebookMessenger, faTelegram } from '@fortawesome/free-brands-svg-icons'
const SocialMedia = () => {
  return (
    <>
    
    <div className='Social' >
        <div>
            <h2 className='tituloSocial'>Tell a Friend</h2>
        </div>
        <div className='icon'>
        
        <a className='iconEnlace' href=""><FontAwesomeIcon style={{fontSize:"2em", color:"red", margin:"10px" }} icon={faInstagram} />{"  "}</a>
        <a className='iconEnlace' href=""><FontAwesomeIcon style={{fontSize:"2em", color:"red", margin:"10px" }} icon={faFacebook} />{"  "}</a>
        <a className='iconEnlace' href=""><FontAwesomeIcon style={{fontSize:"2em", color:"red", margin:"10px" }} icon={faTwitter} />{"  "}</a>
        <a className='iconEnlace' href=""><FontAwesomeIcon style={{fontSize:"2em", color:"red", margin:"10px" }} icon={faWhatsapp} />{"  "}</a>
        <a className='iconEnlace' href=""><FontAwesomeIcon style={{fontSize:"2em", color:"red", margin:"10px" }} icon={faFacebookMessenger} />{"  "}</a>
        <a className='iconEnlace' href=""><FontAwesomeIcon style={{fontSize:"2em", color:"red", margin:"10px" }} icon={faTelegram} />{"  "}</a>
        </div>
    </div>
    </>
  )
};

export default SocialMedia
