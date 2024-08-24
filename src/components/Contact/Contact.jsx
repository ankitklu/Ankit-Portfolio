import React from "react";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Loader from "react-loaders";
import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.error("Failed to send the message:", error);
          alert("Failed to send the message, please try again");
        }
      );
  };
  

  return (
    <>
      <div className="container contact_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Want to connect? My inbox is always open! Don't hesitate to contact
            me using below form either.
          </p>

          {/* CONTACT FORM SECTION */}

          <div className="contact_form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat_button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* MAP INFO SECTION */}

        <div className="info_map">
          Ankit ,
          <br />
          India, Andhra Pradesh
          <br />
          KLU University
          <br />
          Vijayawada
          <br />
          <span>ankit.klu.2022@gmail.com</span>
        </div>

        {/* MAP SECTION */}

        <div className="map_wrap">
          <MapContainer center={[16.5062, 80.648]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[16.442220, 80.622500]}>
              <Popup>Ankit lives here, let's meet!!! :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>{" "}
      */ /* <Loader type="pacman" />
    </>
  );
};

export default Contact;
