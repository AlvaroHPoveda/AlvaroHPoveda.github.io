import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { layout } from "../styles";
import Logo from "../img/Logo.png";

const Layout = () => {
  return (
    <main className="container">
      <nav className="nav">
        <div className="icono">
          <img className="logo" src={Logo} alt="logo" />
          <span>Alvaro</span>
          <br />
          <span>Web</span>
          <br />
          <span>Developer</span>a
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#000" }
                  : { textDecoration: "none", color: "#fff" }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#000" }
                  : { textDecoration: "none", color: "#fff" }
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MySkill"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#000" }
                  : { textDecoration: "none", color: "#fff" }
              }
            >
              MySkill
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#000" }
                  : { textDecoration: "none", color: "#fff" }
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#000" }
                  : { textDecoration: "none", color: "#fff" }
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <div className="networks">
            <a href="https://www.linkedin.com/in/alvaro-hernan-poveda-velasco-b81633219/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/AlvaroHPoveda?tab=repositories">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <footer style={{ fontSize: "0.6rem", display: "block" }}>
            Copyright © by Alvaro Poveda
          </footer>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
