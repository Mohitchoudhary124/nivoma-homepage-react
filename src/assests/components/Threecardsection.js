import React from 'react'
import '../css/threecardsection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faPlus ,faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function Threecardsection() {
  return (
    <section>
        <div className='cardsection'>
            <div className='card card1'>
                <div className='card1-inner'>
                    <div className='card1-content'>
                        <h2> <FontAwesomeIcon icon={faArrowUp}/> 320<FontAwesomeIcon icon={faPlus} /></h2>
                        <h3>Zufriedene Verpachter</h3>
                        <div className='plus-icon'><FontAwesomeIcon icon={faCirclePlus} size='xl'/></div>
                    </div>
                    <div className='card card1-overlay'>
                        <div className='card1-overlay-content'>
                        <p>
                        Mit über 322 installierten Solaranlagen haben wir bereits einer bedeutenden Beitrag zur Förderung von sauberer Energle und zum Umweltschutz geleistet.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card card2'>
            <div className='card2-inner'>
                    <div className='card2-content'>
                        <h2> <FontAwesomeIcon icon={faArrowUp}/> 89MW </h2>
                        <h3>An Projekten in der Umsetzung</h3>
                        <div className='plus-icon'><FontAwesomeIcon icon={faCirclePlus} size='xl' /></div>
                    </div>
                    <div className='card card2-overlay'>
                        <div className='card2-overlay-content'>
                        <p>
                        Mit über 322 installierten Solaranlagen haben wir bereits einer bedeutenden Beitrag zur Förderung von sauberer Energle und zum Umweltschutz geleistet.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card card3'>
            <div className='card3-inner'>
                    <div className='card3-content'>
                        <h2> <FontAwesomeIcon icon={faArrowUp}/> 38 </h2>
                        <h3>Berater vor Ort</h3>
                        <div className='plus-icon'><FontAwesomeIcon icon={faCirclePlus} size='xl'/></div>
                    </div>
                    <div className='card card3-overlay'>
                        <div className='card3-overlay-content'>
                        <p>
                        Mit über 322 installierten Solaranlagen haben wir bereits einer bedeutenden Beitrag zur Förderung von sauberer Energle und zum Umweltschutz geleistet.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Threecardsection