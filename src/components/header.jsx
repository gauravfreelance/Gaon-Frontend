import React from "react";
import "./index.css";
import logo from "../assets/lg.png";

const Header = () => {
	return (
		<div>
		<header className="header">
			{/* <div className="logo">
        <img src={logo} width={70} height={70} style={{background:"red"}}/>
        </div> */}
			<nav className="nav">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Teacher Connection</a>
					</li>
					<li>
						<a href="#">Kisaan Connection</a>
					</li>
					<li style={{ paddingRight: "35px", marginRight: "50px" }}>
						<a href="#">
							<img
								style={{ position: "absolute", top: "45px",paddingLeft:'10px' }}
								src={logo}
								width={80}
								height={60}
							/>
						</a>
					</li>
					<li>
						<a href="#">Surverys & Reports</a>
					</li>
					<li>
						<a href="/change-maker">Change Maker</a>
					</li>
					<li>
						<a href="#">Latest News</a>
					</li>
				</ul>
			</nav>
		</header>
			<span style={{display:"block", fontSize: "20px", color:"black", textAlign:"center", width:"100%" }}>सुनिए गाँव की आवाज़ बनिए गाँव की आवाज़</span>
		</div>
	);
};

export default Header;
