import React from 'react';
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import { HLink } from '../HLink';
import { SectionImage } from '../SectionImage';

export const Portfolio = () => {
    return (
        <section id="two" className="wrapper style2 spotlights">
            <SectionImage 
            href="https://facebook.com " 
            src={pic01} alt="Proyecto" 
            title="Sed ipsum dolor" 
            paragraph="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
            />
            <SectionImage 
            href="https://facebook.com " 
            src={pic02} alt="Proyecto" 
            title="Feugiat consequat" 
            paragraph="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
            />     
            <SectionImage 
            href="https://facebook.com " 
            src={pic03} alt="Proyecto" 
            title="Ultricies aliquam" 
            paragraph="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
            />        
    </section>
    )
}