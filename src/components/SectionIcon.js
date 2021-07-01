import React from 'react'

export const SectionIcon = ({
    title,
    paragraph,
    icon
}) => {
    return (
        <section>
            <span className={icon} ></span>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </section>
            )
    }