import React, { useContext } from 'react';
import { PortfolioItems } from './PortfolioItems';
import { LanguageContext } from '../../containers/Language';
import './Portfolio.css'
import { SectionImage } from '../SectionImage';

export const Portfolio = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <section id="two" className="wrapper style2 spotlights">
			{PortfolioItems.map((item, index)=> (
                <SectionImage 
                    href={item.href}
                    src={item.src} alt={item.alt}
                    title={dictionary[item.id][item.title]}
                    paragraph={dictionary[item.id][item.paragraph]}
                /> 
            ))}       
    </section>
    )
}