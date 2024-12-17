import { NavLink } from "react-router-dom";

import { navlinks, NavLinkType } from "./";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <span className={style.logo}>Mon super Site</span>
      <ul className={style.list}>
        {navlinks.map((elem: NavLinkType) => (
          <li key={elem.id}>
            <NavLink to={elem.link} className={style.element}>
              {elem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
