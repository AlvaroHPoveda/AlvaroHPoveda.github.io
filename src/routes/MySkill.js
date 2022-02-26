import React from "react";
import { NavLink } from "react-router-dom";
import { js, html, css, react, redux, academlo, nodeJS } from "../icon/index";
import { myskill } from "../styles";

const MySkill = () => {
  return (
    <article>
      <div className="content">
        <h1>
          Skill & <br /> Experience{" "}
        </h1>
        <h3>
          I am starting this journey as a developer, I come from practicing
          electronic engineering that is related to technology careers.. I
          create successful responsive websites that are fast, easy to use, and
          built with best practices. The main area of ​​my expertise is
          front-end development, HTML, CSS, JS, building small and medium web
          apps, custom plugins, features, animations, and coding interactive
          layouts. Visit my{" "}
          <a
            href="https://www.linkedin.com/in/alvaro-hernan-poveda-velasco-b81633219/"
            style={{
              textDecoration: "none",
              color: "rgb(20, 219, 176)",
              fontSize: "1.2rem",
            }}
          >
            LinkedIn
          </a>{" "}
          profile for more details or just{" "}
          <NavLink
            to="/Contact"
            style={{
              textDecoration: "none",
              color: "rgb(20, 219, 176)",
              fontSize: "1.2rem",
            }}
          >
            contact me
          </NavLink>
          .
        </h3>
      </div>
      <aside className="asidemyskill">
        <div className="container-skill">
          <div className="div-html-css">
            <img className="img-skill-html" src={html} alt="" />
            <img className="img-skill-css" src={css} alt="" />
          </div>
          <div className="progress-html progress-striped-html">
            <div className="progress-bar-html"></div>
          </div>
        </div>

        <div className="container-skill">
          <div className="div-js">
            <img className="img-skill-js" src={js} alt="" />
          </div>
          <div className="progress-js progress-striped-js">
            <div className="progress-bar-js"></div>
          </div>
        </div>
        <div className="container-skill">
          <div className="div-react-redux">
            <img className="img-skill-react" src={react} alt="" />
            <img className="img-skill-redux" src={redux} alt="" />
          </div>
          <div className="progress-react progress-striped-react">
            <div className="progress-bar-react"></div>
          </div>
        </div>
        <div className="container-skill">
          <div className="div-nodejs">
            <img className="img-skill-nodejs" src={nodeJS} alt="" />            
          </div>
          <div className="progress-react progress-striped-react">
            <div className="progress-bar-react"></div>
          </div>
        </div>

        <div className="card-student">
          <p>
            <b>Full stack developer</b>
          </p>
          <br />
          <img className="img-card-student" src={academlo} alt="" />
          <p>Academlo Academy Student October 2021</p>
        </div>
      </aside>
    </article>
  );
};

export default MySkill;
