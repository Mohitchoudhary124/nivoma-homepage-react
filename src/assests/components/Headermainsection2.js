import React from 'react'
import sec2image from '../images/imagesec2.png'
import '../css/headermainsection2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble  } from '@fortawesome/free-solid-svg-icons';


function Headermainsection2() {
  return (
    <section>
        <div className='mainsec2'>
            <div className='sec2-image'>
                <img src={sec2image} alt=''/>
            </div>
            <div className='sec2-content'>
                <div className='content-inner'>
                    <h4>JETZT VERGLEICHEN</h4>
                    <h2>Profitieren Sie von Ihrer</h2>
                    <h3>ungenutzten Fläche</h3>
                    <p>Mit NIVOMA entdecken Sie die besten Angebote für Ihre Flächen und maximieren Ihre Einnahmen.</p>
                </div>

            <div className='arrow-list'>
            <p> <FontAwesomeIcon icon={faCheckDouble}/> Mieteinnahmen ohne Aufwand</p>
                        <p> <FontAwesomeIcon icon={faCheckDouble}/>  Geld sparen ohne Anschaffungskosten</p>
                        <p> <FontAwesomeIcon icon={faCheckDouble}/> Strom kostengünstiger selbst beziehen</p>
                    </div>
                <div className='content-outer'>
                <button>Kostenloses Beratungsgespräch</button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Headermainsection2