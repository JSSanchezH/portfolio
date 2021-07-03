import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import cv from '../images/jssanchezh.pdf'
import { Link } from "react-scroll";
import { HLink } from '../HLink';
import LanguageSelector from '../LanguageSelector';


export default class Nav extends Component {
  state = { clicked: true };

  handleClick= () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <header id="sidebar">
        <div className="inner">
        <LanguageSelector/>
          <nav className="nav">
          <span className='toggle-menu' onClick={this.handleClick}>
            <i className={this.state.clicked ? 'icon-menu active' : 'icon-menu'}></i>
          </span>
              <ul className='nav-menu' >
                {MenuItems.map((item, index)=> {
                  return (
                    <li key={index} className="menu-item" >
                      <Link className={item.cName} to={item.url} spy={true} smooth={true} duration={600}>
                         {item.title}
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <HLink children="curriculum vitae" href={cv} download="Juan-Sebastian-Sanchez-Hincapie"/>
                </li>
              </ul>
          </nav>

        </div>
      </header>
    )
  }
}

