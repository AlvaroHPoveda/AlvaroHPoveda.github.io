import React from "react";
import { NavLink } from "react-router-dom";
import { about } from "../styles";

const About = () => {
  return (
    <article>
      <div className="content">
        <h1>My, myself & I</h1>
        <h3>
          I'm a Front-End located in Colombia. I have serious passion for the
          programming. Well-organised person, problem solver, independent
          employee with high attention to detail. success follower. outdoor
          activities, TV series. My family is my wife and son. Interested in the
          entire frontend spectrum and working on ambitious projects with
          positive people.
        </h3>
        <NavLink
          to="/Contact"
          style={{
            textDecoration: "none",
            color: "rgb(20, 219, 176)",
            fontSize: "1.2rem",
          }}
        >
          Let's make something special.
        </NavLink>
      </div>
      <aside className="asideabout"></aside>
    </article>
  );
};

export default About;
