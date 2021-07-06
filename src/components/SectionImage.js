import React, { useContext } from 'react'
import { LanguageContext } from '../containers/Language';
import { HLink } from './HLink';

export const SectionImage = ({
    title,
    paragraph,
    href,
    src,
    alt
}) => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <section>
            <a 
            className="image" 
            href={href} 
            rel="noreferrer" 
            target="_blank"
            >
                <img src={src} alt={alt} data-position="center center"/>
            </a>
            <div className="content">
                <div className="inner">
                    <h2>{title}</h2>    
                    <p>{paragraph}</p>
                    <ul className="actions">
                    <li><HLink children={dictionary.button.learnmore} href="generic.html" /></li>
                </ul>
                </div>
            </div>
        </section>
            )
    }