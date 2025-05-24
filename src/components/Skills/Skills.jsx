import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faJava,
  faGithub,
  faNodeJs,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            I am a "PROGRAMMER" and I like to code in 
            <span class="tech_tag"> Java 11</span>,
            The tech I know and work with are:
            <span class="tech_tag"> HTML5</span>,
            <span class="tech_tag"> CSS3</span>,
            <span class="tech_tag"> JavaScript</span>,
            <span class="tech_tag"> TypeScript</span>,
            <span class="tech_tag"> React.js</span>,
            <span class="tech_tag"> Next.js</span>,
            <span class="tech_tag"> Node.js</span>,
            <span class="tech_tag"> Tailwind Css</span>,
            <span class="tech_tag"> Git</span>,
          </p>
          <p>
          As a dedicated coder, I take pride in my expertise in web development and problem-solving. I enjoy the process of turning ideas into functional, visually stunning websites that prioritize both user experience and performance. Problem-solving is where I truly excel; I thrive on the challenge of dissecting complex issues, creative solutions. With a solid grasp of algorithms and a relentless drive to learn. Whether it's debugging code or optimizing a website, I approach every task with enthusiasm and a commitment to excellence.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ankitkumarmishra060702/"
            >
              {" "}
              LinkedIn{" "}
            </a>
            and
            <a target="_blank" href="https://github.com/ankitklu">
              {" "}
              Github{" "}
            </a>
            profile for more details.
          </p>
        </div>

        <div className="logos_container">
          <div className="logos">
            <p>
              <FontAwesomeIcon icon={faJava} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </p>
            <p>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} color="#050505" />
            </p>
            <p>
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            </p>
            <p>
              <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
