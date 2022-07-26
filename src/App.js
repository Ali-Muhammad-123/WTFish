import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import appStore from "./images/app-store.png";
import anchor from "./images/anchor.png";
import phone1 from "./images/Phone1.png";
import phone2 from "./images/Phone2.png";
import phone3 from "./images/Phone3.png";
import phone4 from "./images/Phone4.png";
import phone5 from "./images/Phone5.png";
import Vector1 from "./images/Vector1.png";
import Vector2 from "./images/Vector2.png";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Footer from "./components/footer";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: "20px 0px",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&.MuiPaper-root": {
    backgroundColor: "transparent",
    border: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ color: "#fff", fontSize: "1rem" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "52px",
    color: "#fff",

    "& .MuiTypography-root": {
      fontWeight: "500",
      fontSize: "40px",
      lineHeight: "52px",
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  border: "none",
  "& .MuiTypography-root": {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
  },
}));

function App() {
  return (
    <div className="App">
      <div id="home" className="element">
        <section className="first-section">
          <div className="first-section-background" />
          <header className="App-header">
            <Navbar />
            <div className="first-banner">
              <h1>
                Train yourself to discover all the species of came across during
                your dives!
              </h1>
              <Link
                activeClass="active"
                className="test6"
                to="download"
                spy={true}
                smooth={true}
                duration={500}
              >
                <img
                  src={appStore}
                  style={{
                    cursor: "pointer",
                    width: "fit-content",
                    paddingTop: "25px",
                  }}
                />
              </Link>
              <img
                src={anchor}
                style={{
                  width: "fit-content",
                  paddingTop: "73px",
                  paddingBottom: "40px",
                }}
              />
            </div>
          </header>
        </section>
      </div>
      <section className="second-section">
        <img
          className="cloud1"
          src={Vector1}
          style={{
            width: "calc(100% - 45px)",
            paddingLeft: "45px",
            position: "absolute",
            bottom: "0",
            zIndex: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div className="second-section-inside">
          <h1
            style={{
              fontWeight: "500",
              fontSize: "48px",
              textAlign: "center",
              paddingTop: "80px",
              margin: "0",
              color: "#111111",
            }}
          >
            About Bioquizz
          </h1>
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              margin: "0px auto",
              paddingBottom: "80px",
            }}
          >
            <p
              style={{
                fontWeight: "400",
                fontSize: "18px",
                paddingTop: "30px",
                textAlign: "center",
                lineHeight: "27px",
                letterSpacing: "-0.01em",
                color: "#353535",
              }}
            >
              Bioquizz is an application that allows you to answer quizzes on
              the theme of marine animals. The mobile app is a great way to
              learn more about marine animals, and is used by many heads of
              state and senior government officials.
              <br />
              It's free and it's the perfect app to have fun with your friends.
            </p>
          </div>
        </div>
      </section>
      <div id="features" className="element">
        <section className="third-section">
          <img
            className="cloud2"
            src={Vector2}
            style={{
              paddingLeft: "45px",
              width: "calc(100% - 45px )",
              height: "100%",
              position: "absolute",
              top: "-13px",
              zIndex: "0",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div className="third-section-inner">
            <h1
              style={{
                fontWeight: "500",
                paddingTop: "60px",
                textAlign: "center",
                fontSize: "48px",
                margin: "0",
              }}
            >
              Features
            </h1>
            <div
              className="flex-boxes"
              style={{
                paddingTop: "58px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={phone1} />
              <div style={{ width: "100%", maxWidth: "569px" }}>
                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "40px",
                    color: "#111111",
                    paddingTop: "80px",
                  }}
                >
                  Choose your favorite categories
                </h2>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-0.01em",
                    color: "#424344",
                  }}
                >
                  You have the possibility with Bioquizz to train on any
                  category you want. Among the categories there are:
                  <br />
                  -Mediterranean
                  <br />
                  -Atlantic
                  <br />
                  -Faune
                  <br />
                  -Flore
                </p>
              </div>
            </div>
          </div>
          <div className="third-section-inner">
            <div
              className="flex-boxes reverse"
              style={{
                paddingTop: "40px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "100%", maxWidth: "569px" }}>
                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "40px",
                    color: "#111111",
                    paddingTop: "80px",
                  }}
                >
                  Leaderboard
                </h2>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-0.01em",
                    color: "#424344",
                  }}
                >
                  Compete against the other Bioquiz player and gain places in
                  the ranking. This space allows you to assess your level of
                  play and why not give you potential motivation to reach the
                  podium!
                </p>
              </div>
              <img src={phone2} />
            </div>
          </div>
          <div className="third-section-inner">
            <div
              className="flex-boxes"
              style={{
                paddingTop: "40px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={phone3} />

              <div style={{ width: "100%", maxWidth: "569px" }}>
                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "40px",
                    color: "#111111",
                    paddingTop: "80px",
                  }}
                >
                  Manage your profile
                </h2>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-0.01em",
                    color: "#424344",
                  }}
                >
                  From your Bioquizz profile, you will be able to see your
                  performance and track your previous scores.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="faqs" className="element">
        <section className="forth-section">
          <div className="forth-section-inner">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Is the bioquiz app free?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris in quam vehicula nisi fringilla ultrices. Integer
                  efficitur sed ante rutrum fermentum. Fusce convallis aliquet
                  neque, eu tincidunt enim venenatis sit amet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>
                  Is the Bioquie app intended for everyone?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris in quam vehicula nisi fringilla ultrices. Integer
                  efficitur sed ante rutrum fermentum. Fusce convallis aliquet
                  neque, eu tincidunt enim venenatis sit amet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Can we play Bioquiz offline?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris in quam vehicula nisi fringilla ultrices. Integer
                  efficitur sed ante rutrum fermentum. Fusce convallis aliquet
                  neque, eu tincidunt enim venenatis sit amet.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </div>
      <div id="download" className="element">
        <section className="fifth-section">
          <div className="fifth-section-inner">
            <div className="fifth-section-inner-padding">
              <h3
                className="download-text"
                style={{
                  fontWeight: "500",
                  color: "#111111",
                  margin: "0",
                }}
              >
                Download Bioquizz
              </h3>
              <img
                src={appStore}
                style={{
                  width: "fit-content",
                  paddingTop: "60px",
                  cursor: "pointer",
                }}
              />

              <img className="phone4" src={phone4} />
              <img className="phone5" src={phone5} />
            </div>
          </div>
        </section>
      </div>
      <footer className="footer-outer-wrapper">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
