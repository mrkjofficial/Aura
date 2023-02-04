import React from "react";
import "./Navbar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar--left">
					<span className="logo">AURA</span>
				</div>
				<div className="navbar--right">
					<div className="icon-container">
						<NotificationsNoneIcon />
						<span className="icon-badge">2</span>
					</div>
					<div className="icon-container">
						<LanguageIcon />
					</div>
					<div className="icon-container">
						<SettingsIcon />
					</div>
					<img
						src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg"
						alt="user-avatar"
						className="user-avatar"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
