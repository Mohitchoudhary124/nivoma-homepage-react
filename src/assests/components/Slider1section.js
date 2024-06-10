import React from 'react'
import '../css/slider1section.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider1section() {
   
    // adding progress bar
   
  
    const options = {
        stagePadding:20,
        loop: true,
        margin: 30,
        nav: false,
        dots:true,
        items:1,
        
        autoplay:true,
        autoplayTimeout:2000,
        // responsive: {
        //   0: {
        //     items: 0,
        //   },
        //   600: {
        //     items: 1,
        //   },
        //   1000: {
        //     items: 1.2,
        //   },
        // },
      };
  return (
    <section>
        <div className='slidersection1main'>
           
            <div className='slidercontent'>
                <div className='slidercontentinner'>
                    <h3>Strahlende Beispiele -</h3>
                    <h2>Unsere Referenzprojekte</h2>
                    <p>Die Sonne als Partner Tauchen Sie ein in die Welt der erneuerbaren Energien und lassen Sie sich von unseren Erfolgen inspirieren. Bei Nivoma gestalten wir gemeinsam eine Zukunft, die hell und grün leuchtet.</p>
                </div>
                <div className='slidercontentbtn'>
                    <button>Zu unseren Referenzen</button>
                </div>
            </div>
            <div className='circle'>
            <div class="circle1"></div>
            <div class=" circle2"></div>
            <div class=" circle3"></div>
            </div>
            <div className='owl-slider'>
            <OwlCarousel className='owl-theme' {...options} >
     <div class='item'>
        <div className='overlay-content'>            
            <div className='overlay-content1'>
              <button className='overlay-content-button'>Kirchhundem (Rheinland-Pfalz)</button>
              <button className='overlay-content-button1'>4532 KwP</button>
            </div>
        </div>
    </div>
    <div class='item'>
    <div className='overlay-content'>            
            <div className='overlay-content1'>
              <button className='overlay-content-button'>Kirchhundem (Rheinland-Pfalz)</button>
              <button className='overlay-content-button1'>4532 KwP</button>
            </div>
        </div>
    
    </div>
    <div class='item'>
    <div className='overlay-content'>            
            <div className='overlay-content1'>
              <button className='overlay-content-button'>Kirchhundem (Rheinland-Pfalz)</button>
              <button className='overlay-content-button1'>4532 KwP</button>
            </div>
        </div>
    </div>
    <div class='item'>
    <div className='overlay-content'>            
            <div className='overlay-content1'>
              <button className='overlay-content-button'>Kirchhundem (Rheinland-Pfalz)</button>
              <button className='overlay-content-button1'>4532 KwP</button>
            </div>
        </div>
    </div>    
    </OwlCarousel>
    <div class="owl-dots">
        <div class="owl-dot active"><span></span></div>
        <div class="owl-dot"><span></span></div>
        <div class="owl-dot"><span></span></div>
    </div>
    
            </div>
        </div>
    </section>
  )
}

export default Slider1section