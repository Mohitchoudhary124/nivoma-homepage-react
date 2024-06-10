import React from 'react'
import '../css/slider2section.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider2img from '../images/WhatsApp-Image-2024-05-14-at-14.21.08_slider2.jpg'
import s2image from '../images/imagesec2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Slider2section() {
    const options = {
        stagePadding:80,
        loop: true,
        margin: 10,
        // nav: true,
        dots:false,
        items:1,
        
        autoplay:true,
        autoplayTimeout:3000,
        // responsive: {
        //   0: {
        //     items: 0.1,
        //   },
        //   600: {
        //     items: 0.8,
        //   },
        //   1000: {
        //     items: 1,
        //   },
        // },
      };
  return (
    <section>
        <div className='slider2-section'>
            <div className='slider2-content'>
                <div className='slider2-content-inner'>
                    <div className='slider2-image'>
                        <img src={slider2img} alt=''/>
                    </div>
                    <div className='slider2-main-content'>
                        <h3>Das sagen unsere </h3>
                        <h2>  Kunden über uns </h2>
                        <p>Erfahren Sie, was unsere Kunden über inre trianrungen mit uns berichten. Lesen sie ihre Meinungen und Bewertungen und entdecken Sie, warum sie sich für uns als vertrauenswurdigen Partner in der solarver pachtung entschieden haben.</p>
                    </div>
                    <div className='png-circle'></div>
                </div>
            </div>
            <div className='slider2-col'>
                <div className='slider2-bg'>
                    <div className='slider2-main'>
                    <OwlCarousel className='owl-theme' {...options} >
    <div class='item slider2item'>
        <div className='slider-inner'>
            <div className='slider-inner-content'>
                <div className='slider-content-top'>
                    <img src={s2image} alt='' />
                    <h2>Petra Liebherr</h2>
                </div>
                <div className='slider-content-middle'><h2>
						Wir schätzen die transparente Kommunikation und die
Effizienz, mit der NIVOMA...</h2></div>
                <div className='slider-content-bottom'>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                </div>
            </div>
            </div>       
    </div>
   
    <div class='item slider2item'>
    <div className='slider-inner'>
            <div className='slider-inner-content'>
                <div className='slider-content-top'>
                    <img src={s2image} alt='' className='slider-content-img'/>
                    <h2>Dr. Lutz</h2>
                </div>
                <div className='slider-content-middle'><h2>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h2></div>
                <div className='slider-content-bottom'>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                </div>
            </div>
            </div>    
    </div>
    <div class='item slider2item'>
    <div className='slider-inner'>
            <div className='slider-inner-content'>
                <div className='slider-content-top'>
                    <img src={s2image} alt='' />
                    <h2>Jürgen W.</h2>
                </div>
                <div className='slider-content-middle'><h2>
						Absolut empfehlenswert Gruß Jürgen			
                        </h2>
                        </div>
                <div className='slider-content-bottom'>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                    <FontAwesomeIcon icon={faStar} size='xs'/>
                </div>
            </div>
            </div>    
    </div>    
    </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slider2section