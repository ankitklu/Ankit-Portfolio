import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// import Logo from "./Logo/Logo";
import LogoN from "./logo-n.png"
import "./Home.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text_animate");
  const nameArray = [" ","A", "n", "k", "i", "t", ","];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r"
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home_page">
        <div className="text_zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt="developer" /> */}

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>MERN Stack Developer</h2>
          
          <Link to="/contact" className="flat_button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="logo_container">
        <img className="solid_logo" src={LogoN} alt="Ankit" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
