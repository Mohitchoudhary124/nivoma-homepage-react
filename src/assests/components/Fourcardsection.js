import React from 'react'
import '../css/fourcardsection.css'
import cardimg1 from '../images/Fa-Team-Fontawesome-Brands-FontAwesome-Brands-Canadian-Maple-Leaf.512.png'
import cardimg2 from '../images/images circle.jpg'
import cardimg3 from '../images/images hexagone.png'
import cardimg4 from '../images/images hand.png'
function Fourcardsection() {
  return (
    <section>
        <div className='card-section'>
            <div className='card-row1'>
                <div className='card1-row1-col1'>
                    <div className='card1-content'>
                        <h3 className='card-title'><img src={cardimg1} className='cardimg'/>Wirtschaftlichkeit</h3>
                        <h2 className='card-heading'>Investieren Sie in eine nachhaltige Zukunft.</h2>
                        <p className='card-para'>Durch die Verpachtung Ihrer Flächen für Solaranlagen sichern Sie sich eine stabile Einnahmequelle ohne zusätzliche Kosten. Profitieren Sie von einer langfristigen, nachhaltigen Investition die sowohl ökologisch als auch wirtschaftlich sinnvoll ist.</p>
                    </div>
                </div>
                <div className='card2-row1-col2'>
                <div className='card1-content'>
                        <h3 className='card-title'><img src={cardimg2} className='cardimg'/>Nachhaltige Investition</h3>
                        <h2 className='card-heading'>Nachhaltig in Ihre Zukunft investieren</h2>
                        <p className='card-para'>Mit der Nutzung erneuerbarer Energiequellen wie Solarenergie tragen Sie aktiv zum Umweltschutz bei. Unsere Solaranlagen ermöglichen es Ihnen, eine nachhaltige Investition zu tätigen, die nicht nur finanziell lukrativ ist, sondern auch einen positiven Beitrag zum Klimaschutz leistet.</p>
                    </div>
                </div>
            </div>
            <div className='card-row2'>
                <div className='card3-row2-col3'>
                    <div className='card3-content'>
                        <h3 className='card-title'><img src={cardimg3} className='cardimg'/>Einfacher Prozess</h3>
                        <h2 className='card-heading'>Wir vergleichen - Sie entscheiden</h2>
                        <p className='card-para'>Wir übernehmen den gesamten Prozess der Suche nach dem passenden Pächter und der Vertragsabwicklung für Sie. Sie müssen sich um nichts kümmern - von der Auswahl des geeigneten Pächters bis zur Unterzeichnung des Vertrags unterstützen wir Sie professionell und sorgen für einen reibungslosen Ablauf.</p>
                    </div>
                </div>
                <div className='card4-row2-col2'>
                <div className='card4-content'>
                        <h3 className='card-title'><img src={cardimg4} className='cardimg'/>Kostenfreiheit</h3>
                        <h2 className='card-heading'>Profitieren ohne Risiko</h2>
                        <p className='card-para'>Profitieren Sie von zusätzlichen Einnahmen, ohne dafür Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen der Solarverpachtung profitieren können.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Fourcardsection