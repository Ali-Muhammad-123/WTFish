import React from "react";
import "../styles/headerStyles.css";
import logo from "../images/logo.png";
function Navbar(props) {
	return (
		<div className="header-wrapper">
			<div className="logo-div">
				<img style={{ width: "100%", maxWidth: "100px" }} src={logo} />
			</div>
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
					Home
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
					Features
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
					FAQ
				</a>
			</div>
			<div>
				<button className="download-button">Download app</button>
			</div>
		</div>
	);
}

export default Navbar;
