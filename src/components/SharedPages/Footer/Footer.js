import React from 'react';
import play from '../../../Assests/images/Stores/play-store.png';
import app from '../../../Assests/images/Stores/app-store.png';
import visa from '../../../Assests/images/Stores/visa.png';
import master from '../../../Assests/images/Stores/master.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-style'>
            <div>
                <footer style={{backgroundColor:'black'}} className='text-center text-white py-2 pt-4 mt-4 '>
                <h6 className='text-center mt-4 mb-3'>Copyright © {new Date().getFullYear()} | All Rights Reserved by AHSAN</h6>
                    <div className='d-flex justify-content-around'>
                        <div style={{ textAlign:'left'}}>
                    <p>Read my blog</p>
                    <p>Read FAQs</p>
                    <p>Get help</p>
                    <p>Add your Collection</p>
                        <p>Sofa or Chairs</p>
                    </div>
                        <div style={{display:'block'}}>
                            <div>
                            <a href="">  <img style={{width:'15%'}} src={play} alt="" /></a>
                        </div>
                            <div>
                            <a href="">  <img style={{width:'15%'}} src={app} alt="" /></a>
                      </div>
                       </div>
                    </div>
                    <h4>PAY WITH</h4>
                    <div>
                        <div>
                        <img style={{width:'8%',marginRight:'15px'}} src={visa} alt="" />
                        <img style={{width:'8%'}} src={master} alt="" />
                    </div>
                    </div>
            
            </footer>
        </div>
        </div>
    );
};

export default Footer;