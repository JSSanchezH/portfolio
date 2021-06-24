import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';
import {Button} from '../Button';
import './Navbar.css'
import Avatar from './Juan.jpg'

export default class Nav extends Component {
  state = { clicked: true };

  handleClick= () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <aside className="Sidebar">
        <div className="SidebarItems">
          <NavLink exact to="/portfolio/" className="person active">
            <div className="person-avatar">
              <img src={Avatar} alt="Juan Sebastian Sanchez Hincapie" className="avatar"/>
            </div>
            <div>
              <h1 className="person-title">JUAN SEBASTIAN SANCHEZ HINCAPIE</h1>
              <h2 className="person-subtitle">Full-stack Developer</h2>
            </div>
          </NavLink>
          <div className="icon-menu" onClick={this.handleClick}>

          </div>
          <nav className="main-nav">
            <div className="nav-extendable">
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                {MenuItems.map((item, index)=> {
                  return (
                    <li key={index}>
                      <NavLink className={item.cName} exact to={item.url}>
                        {item.title}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
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
          </nav>
        </div>
      </aside>
    )
  }
}

