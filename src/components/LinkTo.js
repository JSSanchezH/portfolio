import React from 'react'
import { Link } from "react-scroll";

export const LinkTo = ({
    children,
    to
}) => {
    return (
                <Link to={to} className="button scrolly" smooth={true} duration={600}>{children}</Link>
            )
    }