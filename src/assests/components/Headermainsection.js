import React, { useState } from 'react'
import '../css/headermainsection.css'
import mainlogo from '../images/nivoma main logo.jpg'
import mainsecimg from '../images/New-Project-15.png'
import {Link } from 'react-router-dom'

function Headermainsection() {
  const [menu, setmenu] = useState("menu");
  function handleMenu(){
    if(menu === "menu"){
      setmenu("active-menu")
    }
    else{
      setmenu("menu")
    }
  }
  const [menuOpenClose,setMenuOpenClose] =useState(true)

  return (
    <section>
         <div className='main-header'>
        
            <div className='main-header-inner'>
                    <div className='main-logo'>
                        <img src={mainlogo} alt=''/>
                    </div>
                    <div className='header-list navbar'>
                    {menuOpenClose ? (
              <button className='menu-btn' onClick={()=>{handleMenu(); setMenuOpenClose(!menuOpenClose)}}><span>&#9776;</span></button>
            ):(
              <button className='menu-btn' onClick={()=>{handleMenu(); setMenuOpenClose(!menuOpenClose)}}><span>&#10006;</span></button>
            )}
                        <ul className='header-list-inner navbar-nav' id={menu}>
                            <Link className="navlink"><li>Home</li></Link>
                            <Link className="navlink"><li>Referenzen</li></Link>
                            <Link className="navlink"><li>Verpachtung</li></Link>
                            <Link className="navlink"><li>PV-investment</li></Link>
                            <Link className="navlink"><li>Karriere</li></Link>
                            <Link className="navlink"><li>Wissen</li></Link>
                        </ul>
                  

                        <div className='contact-btn'><button>Kontakt</button></div>
                       <div><select className='header-selection'><option>DE</option></select></div>
                    </div>
            </div>
            <div className='main-section'>
               <div> 
                <img src={mainsecimg} alt=''/> 
               </div>
               <div className='main-section-overlay'> 
                  <div className='main-section-overlay-inner'>
                    <div className='overlay-inner-content'>
                        <h2>Wir vergleichen,<br/></h2>
                        <h3> Sie entscheiden </h3>
                        <p>Wir analysieren sorgfältig eine Vielzahl von Faktoren und präsentieren Ihnen die besten Optionen, die Ihren Anforderungen entsprechen.</p>
                    </div>
                    <div className='overlay-inner-content-button'>
                        <div className='contentb1'>Dachfläche verpachten</div>
                        <div className='contentb2'>Freifläche verpachten</div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
    </section>
  )
}

export default Headermainsection