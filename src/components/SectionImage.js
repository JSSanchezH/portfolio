import React from 'react'
import { HLink } from './HLink';

export const SectionImage = ({
    title,
    paragraph,
    href,
    src,
    alt
}) => {
    return (
        <section>
            <a href={href} className="image"><img src={src} alt={alt} data-position="center center" /></a>
            <div className="content">
                <div className="inner">
                    <h2>{title}</h2>
                    <p>{paragraph}</p>
                    <ul className="actions">
                    <li><HLink children="Learn More" href="generic.html" /></li>
                </ul>
                </div>
            </div>
        </section>
            )
    }