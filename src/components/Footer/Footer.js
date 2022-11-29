import React from 'react'

import './footer.css'

const Footer = () => {
    return ( 
        <>
        
        <footer className="text-white text-center text-lg-start" style={{backgroundColor: '#71e0cf', marginTop: 50}}>
  
  <div className="container p-3">
    
    <div className="row">
      
      <div className="col-lg-5 col-md-12 my-3 mb-md-0 footer-text"  >
        <h5 className="text-uppercase">Kim jesteśmy?</h5>

        <p>
          Butik damski oferujący światowe obuwie dla kobiet w każdym wieku, znajdujemy się pod adresem: <br/> <strong>Fikcyjna 1, 00-000 Warszawa</strong>
        </p>
      </div>
      
    </div>
    
  </div>
  

  
  <div className="text-center p-3" style={{backgroundColor: '#ffef95', fontSize: 14, color: '#2F6030'}}>
  ButySwiata.pl <b>© 2022</b> | Wszelkie prawa zastrzeżone
  </div>
  
</footer>
        </>
     );
}

export default Footer;