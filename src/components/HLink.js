import React from 'react'

export const HLink = ({
    children,
    href,
    download
}) => {
    return (
                <a className='button' href={href} download={download}>{children}</a>
            )
    }