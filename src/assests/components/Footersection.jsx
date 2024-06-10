import React from 'react'
import '../css/footer.css'
import footerlogo from '../images/WhatsApp-Image-2024-05-10-at-18.11.44_d46171f3 footer.jpg'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter-2.png'
import telephone from '../images/telephone.png'
import email from '../images/email.png'

function Footersection() {
  return (
    <section>
        <div className='footer-content'>
            <div className='footer-upper'>
                    <div className='footer-upper-col1'>
                        <img src={footerlogo} alt="" />
                        <p>Als führender Vermittler in der Solarbranche setzen wir bei Nivoma alles daran, unseren Kunden den Zugang zu sauberer Energie zu erleichtern. Unsere Expertise in der Vermittlung von Solaranlagen macht uns zum bevorzugten Partner für diejenigen, die innovative Lösungen im Bereich erneuerbarer Energien suchen.</p>
                        <div className='footer-social-icons'>
                            <img src={youtube} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                    <div className='footer-upper-col2'>
                    <h2>Unternehmen</h2>    
                    <h3>Über uns</h3>    
                    <h3>Referenzen</h3>
                    <h3>Karriere</h3>
                    <h3>Kontakt</h3>
                    </div>
                    <div className='footer-upper-col3'>
                    <h2>Rechtliches</h2>    
                    <h3>Beschwerdenmanagement</h3>    
                    <h3>AGB</h3>
                    <h3>Datenschutz</h3>
                    <h3>Impressum</h3>
                    <h3>Cookies verwalten</h3>
                    </div>
            </div>
            <div className='footer-lower'>
                <div className='footer-lower-col1'>
                   <h2>Verpachtung</h2>    
                   <h3>Dachflächen</h3>
                   <h3>Freiflächen</h3>
                </div>
                <div className='footer-lower-col2'>
                   <h2>Investieren</h2>    
                   <h3>Investieren</h3>
                </div>
                <div className='footer-lower-col3'>
                   <h2>Markt & Wissen</h2>    
                   <h3>Neuigkeiten</h3>
                </div>
                <div className='footer-lower-col4'>
                <div className='footer-lower-col4-telephone'>
                    <div><img src={telephone} alt="" /></div>
                    <div><h4>Telefon</h4><br />
                    <h3>06222 6840592</h3>
                    </div>
                    </div>
                <div className='footer-lower-col4-email'>
                <div><img src={email} alt="" /></div>
                  <div><h4>Email</h4>
                    <h3>info@nivoma-solar.de</h3>
                    </div>
                    </div>
                <div className='footer-lower-col4-button'>
                    <h3>Kostenlose Beratung</h3>
                </div>
               </div>
              </div>
              <div className='footer-copyright'>
                <h3>© 2024 NIVOMA GmbH | Sämtliche Rechte vorbehalten.</h3>
              </div>
            </div>    
    </section>
  )
}

export default Footersection