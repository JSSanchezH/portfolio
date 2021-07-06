import React from 'react'
import { Icon } from '../icon/Icon'

export const SectionIcon = ({
    title,
    paragraph,
    className,
    dataIcon,
    d,
    viewBox
}) => {
    return (
        <section>
            <Icon className={className} dataIcon={dataIcon} d={d} viewBox={viewBox}/>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </section>
            )
    }