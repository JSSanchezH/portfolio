import React, { useState, useContext } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import cv from '../images/jssanchezh.pdf'
import { Link } from "react-scroll";
import { HLink } from '../HLink';
import LanguageSelector from '../LanguageSelector';
import { LanguageContext } from '../../containers/Language';


export const Nav = () => { 

  const [state, setState] = useState({clicked: true });

  const { dictionary } = useContext(LanguageContext);

  const handleClick = () => {setState({clicked: !state.clicked}); console.log(state.clicked)}
  
    return (
      <header id="sidebar">
        <div className="inner">
        <LanguageSelector/>
          <nav className="nav">
          <span className='toggle-menu' onClick={handleClick}>
            <i className={state.clicked ? 'icon-menu active' : 'icon-menu'}></i>
          </span>
              <ul className='nav-menu' >

                {MenuItems.map((item, index)=> (
                    <li key={index} className="menu-item" >
                      <Link className={item.cName} to={item.url} spy={true} smooth={true} duration={600}>
                         {dictionary[item.id][item.title]}
                      </Link>
                    </li>
                  ))}

                <li>
                  <HLink children="curriculum vitae" href={cv} download="Juan-Sebastian-Sanchez-Hincapie"/>
                </li>
              </ul>
          </nav>

        </div>
      </header>
    )
  
}

