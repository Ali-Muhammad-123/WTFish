import React from "react";
import "../styles/footerStyles.css";
import appStore from "../images/app-store.png";
import logo from "../images/logo.png";
import soc1 from "../images/social-media1.png";
import soc2 from "../images/social-media2.png";
function Footer(props) {
	return (
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
					<button style={{ border: "none", backgroundColor: "transparent" }}>
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
			<div style={{ display: "flex", padding: "38px 0px" }}>
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
	);
}

export default Footer;
