import React from 'react'

export const Social = ({
    href,
    icon,
    text
}) => {
    return (
        <li>
            <a 
            target="_blank" 
            rel="noreferrer" 
            href={href} 
            className={icon}
            >
            <span 
            className="label"
            >{text}
            </span>
            </a>
        </li>
            )
    }