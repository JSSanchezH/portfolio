import React, { useContext } from 'react';
import { LanguageContext } from '../../containers/Language';
import './Portfolio.css'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import { SectionImage } from '../SectionImage';

export const Portfolio = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <section id="two" className="wrapper style2 spotlights">
            <SectionImage 
            href="https://facebook.com " 
            src={pic01} alt="Proyecto" 
            title={dictionary.portfolio.section1}
            paragraph={dictionary.portfolio.paragraph1}
            />
            <SectionImage 
            href="https://facebook.com " 
            src={pic02} alt="Proyecto" 
            title={dictionary.portfolio.section2}
            paragraph={dictionary.portfolio.paragraph2}
            />     
            <SectionImage 
            href="https://facebook.com " 
            src={pic03} alt="Proyecto" 
            title={dictionary.portfolio.section3}
            paragraph={dictionary.portfolio.paragraph3}
            />        
    </section>
    )
}