import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import '../css/ceosection.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ceoimg1 from '../images/WhatsApp_Image _ceo_2024-05-14_at_16.25.16_c4cc4379-removebg-preview.png'
import ceoimg2 from '../images/WhatsApp_Image_ceo_2024-05-14_at_16.22.39_5f1dd202-removebg-preview.png'
import ceoimg3 from '../images/WhatsApp_Image _ceo_2024-05-14_at_16.25.16_c4cc4379-removebg-preview.png'

function Ceosection() {
    const options = {
        // stagePadding:90,
        loop: true,
        margin: 100,
        nav: true,
        dots:false,
        items:1.2,
        
        autoplayTimeout:2000,
       
      };
  return (
    <section>
        <div className='ceosec-main'>
            <div className='ceo-slidermain'>
            <OwlCarousel className='owl-theme ' {...options} 
        //      navContainerClass="owl-nav-custom"  navText={[
        // <FontAwesomeIcon icon={faCircleArrowLeft} />,
        // <FontAwesomeIcon icon={faCircleArrowRight} />  ]}
      >
    <div class='item'>
        <div className="ceoslider-content-main">
        <div className="ceoslider-content-main-inner">
        <img src={ceoimg1} alt='' className='sliderimg' />
            <div className='ceoslider-content-inner'>
                    <h2>John Doe</h2>
                    <h3>CEO</h3>
                    </div>
        </div>
        </div>
    </div>
    <div class='item'>
    <div className="ceoslider-content-main">
    <div className="ceoslider-content-main-inner">
    <img src={ceoimg2} alt='' className='sliderimg'/>
            <div className='ceoslider-content-inner'>
                    <h2>Michael Jenkowitz</h2>
                    <h3>NIVOMA Berater</h3>
                    </div>
        </div>
        </div>
    </div>
    <div class='item'>
    <div className="ceoslider-content-main">
    <div className="ceoslider-content-main-inner">
    <img src={ceoimg3} alt='' className='sliderimg'/>
            <div className='ceoslider-content-inner'>
                    <h2>Andreas Kowalski</h2>
                    <h3>NIVOMA Berater</h3>
                    </div>
        </div>
        </div>
    </div>
  
        
    </OwlCarousel>
            </div>
            <div className='ceosec-content'>
            <div className='ceosec-content-inner'>
                <div className='ceosec-content-inner-text'>
                    <h3>UNSER TEAM</h3>
                    <h2>38 Berater in 4 Ländern</h2>
                    <h4>Ihr Partner vor Ort</h4>
                    <p> <FontAwesomeIcon icon={faCheckDouble} size='xl'/>  <span>Berater in alien lo deurschen ouncestandern</span></p>
                    <p> <FontAwesomeIcon icon={faCheckDouble} size='xl'/> <span>Beratung in der Schweiz und Österreich</span></p>
                    <p> <FontAwesomeIcon icon={faCheckDouble} size='xl'/> <span>Lokale Berateung in den USA (Texas. Kalifornien und Florida)</span></p>
                </div>
                <div className='ceosec-content-inner-button'>
                    <button className='ceoslider-content-b1'>Dachfläche verpachten</button>
                    <button className='ceoslider-content-b2'>Freifläche verpachten</button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Ceosection