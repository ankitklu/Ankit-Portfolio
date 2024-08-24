import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCog,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="nav_bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink activeclassname="active" to="/about" className="about_link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink activeclassname="active" to="/skills" className="skills_link">
          <FontAwesomeIcon icon={faCog} />
        </NavLink>

        <NavLink activeclassname="active" to="/work" className="work_link">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>

        <NavLink activeclassname="active" to="/code" className="code_link">
          <FontAwesomeIcon icon={faCode} />
        </NavLink>

        <NavLink activeclassname="active" to="/internship" className="job_link">
          <FontAwesomeIcon icon={faMicrosoft} />
        </NavLink>

        <NavLink
          activeclassname="active"
          to="/contact"
          className="contact_link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ankitkumarmishra060702/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/ankitklu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li>
          <a
            href="https://x.com/ANKITKM32823"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/ankit_k_m_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
