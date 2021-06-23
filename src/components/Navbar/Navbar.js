import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import Avatar from './Juan.jpg'

export default class Nav extends Component {
  state = { clicked: false };

  render() {
    return (
      <aside className="Sidebar">
        <div className="SidebarItems">
          <a href="/" className="person">
            <div className="person-avatar">
              <img src={Avatar} alt="Juan Sebastian Sanchez Hincapie" className="avatar"/>
            </div>
            <div>
              <h1 className="person-title">JUAN SEBASTIAN SANCHEZ HINCAPIE</h1>
              <h2 className="person-subtitle">Full-stack Developer</h2>
            </div>
          </a>
          <nav className="main-nav">
            <div className="nav-extendable">
              <ul className="side-menu">
                {MenuItems.map((item, index)=> {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
          <div>
            <div className="social">
              <a target="_blank" href="mailto:juansebastiansanchezh@gmail.com" className="icon-mail"></a>
              <a target="_blank" href="https://linkedin.com/in/jssanchezh/" class="icon-in"></a>
              <a target="_blank" href="https://github.com/JSSanchezH/" class="icon-gh"></a>
              <a target="_blank" href="" class="icon-fb"></a>
              <a target="_blank" href="" class="icon-tw"></a>
            </div>
            {/* <p class="copy">&copy; J. S. Sánchez Hincapié 2021 - Todos los derechos reservados</p> */}
          </div>
        </div>
      </aside>
    )
  }
}

