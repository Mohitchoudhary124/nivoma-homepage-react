import React,{useState} from 'react'
import '../css/faqsection.css'

function Faqsection() {
    const [faqselect1,setfaqSelect1] =useState(false)
    function handlefaqColor1(){
        setfaqSelect1(false)
        setfaqSelect2(true)
        setfaqSelect3(true)
        setfaqSelect4(true)
        setfaqSelect5(true)
    }
    const [faqselect2,setfaqSelect2] =useState(true)
    function handlefaqColor2(){
        setfaqSelect2(false)
        setfaqSelect1(true)
        setfaqSelect3(true)
        setfaqSelect4(true)
        setfaqSelect5(true)
    }
    const [faqselect3,setfaqSelect3] =useState(true)
    function handlefaqColor3(){
        setfaqSelect3(false)
        setfaqSelect1(true)
        setfaqSelect2(true)
        setfaqSelect4(true)
        setfaqSelect5(true)
    }
    const [faqselect4,setfaqSelect4] =useState(true)
    function handlefaqColor4(){
        setfaqSelect4(false)
        setfaqSelect1(true)
        setfaqSelect2(true)
        setfaqSelect3(true)
        setfaqSelect5(true)
    }
    const [faqselect5,setfaqSelect5] =useState(true)
    function handlefaqColor5(){
        setfaqSelect5(false)
        setfaqSelect1(true)
        setfaqSelect2(true)
        setfaqSelect3(true)
        setfaqSelect4(true)
    }
    const [openfaqs, setOpenfaqs] = useState([
        {
          question: 'Welche Vorteile bietet die Solarverpachtung mit NIVOMA?',
          answer: 'Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. UnsereDienstleistungen sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen der Solarenergie profitieren können.',
          open: false
        },
        {
          question: 'Wie funktioniert die Solarverpachtung mit NIVOMA?',
          answer: 'Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen der Solarenergie profitieren können.',
          open: false
        },
        {
          question: 'Welche Voraussetzungen muss mein Grundstück erfüllen?',
          answer: 'Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen der Solarenergie profitieren können.',
          open: false
        },
        {
            question: 'Welche Rolle spielt NIVOMA bei der Solarverpachtung?',
            answer: 'Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen der Solarenergie profitieren können.',
            open: false
          }
      ]);
    
      const toggleFAQ = (index) => {
        setOpenfaqs(openfaqs.map((faq,i)=>{
            if(i === index){
                faq.open =!faq.open
            }
            else{
                faq.open =false 
            }
            return faq;
        }));
      };

      const [selectfaq1,setSelectfaq1] =useState("selectfaqRight1")
      const [selectfaq2,setSelectfaq2] =useState("faqRight2")
      const [selectfaq3,setSelectfaq3] =useState("faqRight3")
      const [selectfaq4,setSelectfaq4] =useState("faqRight4")
      const [selectfaq5,setSelectfaq5] =useState("faqRight5")
    
      function handleSelectedfaq1(){
        setSelectfaq1(true)
        setSelectfaq2(true)
        setSelectfaq3(true)
        setSelectfaq4(true)
        setSelectfaq5(true)
      }
      function handleSelectedfaq2(){
        setSelectfaq2(false)
        setSelectfaq1(false)
        setSelectfaq3(true)
        setSelectfaq4(true)
        setSelectfaq5(true)
      }
      function handleSelectedfaq3(){
        setSelectfaq3(false)
        setSelectfaq2(true)
        setSelectfaq1(false)
        setSelectfaq4(true)
        setSelectfaq5(true)
      }
      function handleSelectedfaq4(){
        setSelectfaq4(false)
        setSelectfaq2(true)
        setSelectfaq3(true)
        setSelectfaq1(false)
        setSelectfaq5(true)
      }
      function handleSelectedfaq5(){
        setSelectfaq5(false)
        setSelectfaq2(true)
        setSelectfaq3(true)
        setSelectfaq4(true)
        setSelectfaq1(false)
      }

  return (
    <section>
        <div className='faqs-section'>
          <div className='faqs-left'>
            <h1>Häufig gestellte Fragen</h1>
            <div className='faqs-q'>
                <div className='faq-q-default' onClick={()=>{handlefaqColor1();handleSelectedfaq1()}}>
                    <h3 className={faqselect1 ? "faq-h3" :"select-faq-h3"} onClick={()=>{handlefaqColor1();handleSelectedfaq1()}}>Verpachten</h3>
                    <div className={faqselect1 ? "" :"border-select"}></div>
                    <div className="faqs-right" id={selectfaq1 ?"selectfaqRight1":"faqRigth"}>
                        {openfaqs.map((faq,i)=>{
                            return(
                                <div className={'faq'+(faq.open ? 'open' :'')} key={i} onClick={()=>{ toggleFAQ(i)}}>
                                    <div className='question'>{faq.question}</div>
                                    <div className='answer'>{faq.answer}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='faq-q-default' onClick={()=>{handlefaqColor2(); handleSelectedfaq2()}}>
              <h3 className={faqselect2 ? "faq-h3" : "select-faq-h3"} onClick={()=>{handlefaqColor2(); handleSelectedfaq2()}}>Investieren</h3>
              <div className={faqselect2 ? "" : "border-select"}></div>
              <div className="faqs-right" id={selectfaq2 ? "faqRight2" : "selectfaqRight2"}>
            {openfaqs.map((faq,i)=>{
              return(
                <div 
                  className={'faq' + (faq.open ? 'open' : '')} 
                  key={i}  
                  onClick={()=>{
                      toggleFAQ(i)
                  }}>
                  <div className="question">
                    {faq.question} 
                  </div>
                  <div className='answer'>
                    {faq.answer}
                  </div>
              </div>
              )
            })}
              </div>
            </div>
            <div className='faq-q-default' onClick={()=>{handlefaqColor3(); handleSelectedfaq3()}}>
              <h3 className={faqselect3 ? "faq-h3" : "select-faq-h3"} onClick={()=>{handlefaqColor3(); handleSelectedfaq3()}}>Projekte</h3>
              <div className={faqselect3 ? "" : "border-select"}></div>
              <div className="faqs-right" id={selectfaq3 ? "faqRight3" : "selectfaqRight3"}>
            {openfaqs.map((faq,i)=>{
              return(
                <div 
                  className={'faq' + (faq.open ? 'open' : '')} 
                  key={i}  
                  onClick={()=>{
                      toggleFAQ(i)
                  }}>
                  <div className="question">
                    {faq.question} 
                  </div>
                  <div className='answer'>
                    {faq.answer}
                  </div>
              </div>
              )
            })}
              </div>
            </div>
            <div className='faq-q-default' onClick={()=>{handlefaqColor4(); handleSelectedfaq4()}}>
              <h3 className={faqselect4 ? "faq-h3" : "select-faq-h3"} onClick={()=>{handlefaqColor4(); handleSelectedfaq4()}}>Technologie</h3>
              <div className={faqselect4 ? "" : "border-select"}></div>
              <div className="faqs-right" id={selectfaq4 ? "faqRight4" : "selectfaqRight4"}>
            {openfaqs.map((faq,i)=>{
              return(
                <div 
                  className={'faq' + (faq.open ? 'open' : '')} 
                  key={i}  
                  onClick={()=>{
                      toggleFAQ(i)
                  }}>
                  <div className="question">
                    {faq.question} 
                  </div>
                  <div className='answer'>
                    {faq.answer}
                  </div>
              </div>
              )
            })}
              </div>
            </div>
            <div className='faq-q-default' onClick={()=>{handlefaqColor5(); handleSelectedfaq5()}}>
              <h3 className={faqselect5 ? "faq-h3" : "select-faq-h3"} onClick={()=>{handlefaqColor5(); handleSelectedfaq5()}}>Umwelt|</h3>
              <div className={faqselect5 ? "" : "border-select"}></div>
              <div className="faqs-right" id={selectfaq5 ? "faqRight5" : "selectfaqRight5"}>
            {openfaqs.map((faq,i)=>{
              return(
                <div 
                  className={'faq' + (faq.open ? 'open' : '')} 
                  key={i}  
                  onClick={()=>{
                      toggleFAQ(i)
                  }}>
                  <div className="question">
                    {faq.question} 
                  </div>
                  <div className='answer'>
                    {faq.answer}
                  </div>
              </div>
              )
            })}
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Faqsection