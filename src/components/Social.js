import React from 'react'
import { Icon } from '../icon/Icon'

export const Social = ({
    href,
    text,
    className,
    dataIcon,
    d,
    viewBox
}) => {
    return (
        <li>
            <a 
            target="_blank" 
            rel="noreferrer" 
            href={href} 
            className={className}
            >
                <Icon dataIcon={dataIcon} d={d} viewBox={viewBox}/>
                
                <span className="label">
                    {text}
                </span>
            </a>
        </li>
            )
    }