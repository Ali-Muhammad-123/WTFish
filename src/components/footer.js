import React from "react";
import "../styles/footerStyles.css";
import appStore from "../images/app-store.png";
import logo from "../images/logo.png";
import soc1 from "../images/social-media1.png";
import soc2 from "../images/social-media2.png";
import { Link } from "react-scroll";
function Footer(props) {
  return (
    <div>
      <div className="footer-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
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
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={appStore} style={{ width: "fit-content" }} />
            </button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <a href="#">
            <img src={soc2} />
          </a>
          <a
            href="#"
            style={{
              padding: "0px 24px",
            }}
          >
            <img src={soc1} />
          </a>
        </div>
        <div
          style={{ display: "flex", padding: "38px 0px", alignItems: "center" }}
        >
          <img style={{ width: "100%", maxWidth: "100px" }} src={logo} />
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "14px",
              fontWeight: "400",
              paddingLeft: "40px",
            }}
          >
            Conditions d’utilisation
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "14px",
              fontWeight: "400",
              padding: "0px 80px",
            }}
          >
            RGPD
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Politique en matière de cookie
          </a>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>WTFish copyright 2022</p>
        </div>
      </div>
      <div className="footer-wrapper-mobile">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <img style={{ width: "100%", maxWidth: "100px" }} src={logo} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
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
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0px",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <img src={appStore} style={{ width: "fit-content" }} />
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#">
            <img src={soc2} />
          </a>
          <a
            href="#"
            style={{
              padding: "0px 24px",
            }}
          >
            <img src={soc1} />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            padding: "38px 0px",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "14px",
              fontWeight: "400",
              paddingLeft: "40px",
              textAlign: "center",
              padding: "10px 0px",
            }}
          >
            Conditions d’utilisation
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "14px",
              fontWeight: "400",
              padding: "0px 80px",
              padding: "10px 0px",
            }}
          >
            RGPD
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111111",
              fontSize: "14px",
              fontWeight: "400",
              padding: "10px 0px",
            }}
          >
            Politique en matière de cookie
          </a>
        </div>
        <div>
          <p style={{ textAlign: "center", paddingTop: "10px" }}>
            WTFish copyright 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
