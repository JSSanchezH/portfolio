import React from  'react';

export const Icon = ({ 
    dataIcon,
    className, 
    id,
    viewBox,
    d
}) => {
    return (
        <svg 
        data-icon={dataIcon}
        className={className} 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox={viewBox}>
            <path 
            fill="currentColor" 
            d={d}>
            </path>
        </svg>
    )
}

