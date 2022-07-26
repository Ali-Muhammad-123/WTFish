import React, { useEffect, useState } from "react";
import "../styles/headerStyles.css";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import { Link } from "react-scroll";
function Navbar(props) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <div className="header-wrapper">
      <div
        className="mobile-menu"
        style={{
          height: windowSize.innerHeight,
          width: "100vw",
          left: mobileOpen ? "0px" : "-100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px 30px",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "40px",
              fontWeight: "400",
              padding: "50px 0px",
            }}
          >
            <Link
              activeClass="active"
              className="test6"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "40px",
              fontWeight: "400",
              padding: "50px 0px",
            }}
          >
            <Link
              activeClass="active"
              className="test6"
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "40px",
              fontWeight: "400",
              padding: "50px 0px",
            }}
          >
            <Link
              activeClass="active"
              className="test6"
              to="faqs"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
          </a>
        </div>
      </div>
      <button
        className="hamburger-button"
        onClick={() => {
          setMobileOpen(!mobileOpen);
        }}
      >
        <img style={{ width: "100%", maxWidth: "20px" }} src={hamburger} />
      </button>
      <div className="logo-div">
        <img style={{ width: "100%", maxWidth: "100px" }} src={logo} />
      </div>
      <div className="nav-links">
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#111111",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          {" "}
          <Link
            activeClass="active"
            className="test6"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#111111",
            fontSize: "18px",
            fontWeight: "400",
            padding: "0px 80px",
          }}
        >
          <Link
            activeClass="active"
            className="test6"
            to="features"
            spy={true}
            smooth={true}
            duration={500}
          >
            Features
          </Link>
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#111111",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          <Link
            activeClass="active"
            className="test6"
            to="faqs"
            spy={true}
            smooth={true}
            duration={500}
          >
            FAQ
          </Link>
        </a>
      </div>
      <div>
        <button className="download-button">Download app</button>
      </div>
    </div>
  );
}

export default Navbar;
