import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ items }) {
  return (
    <nav className="light-blue darken-2">
      <div className="nav-wrapper">
        <a className="brand-logo center" href="/">
          Gergert Ilya
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {items &&
            items.map((element, index) => (
              <li className="nav__item" key={`${element.name}_${index}`}>
                <Link to={element.path}>{element.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}
