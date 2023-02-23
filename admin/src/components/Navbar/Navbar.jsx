import "./Navbar.scss";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar--left">
					<span className="logo">AURA</span>
				</div>
				<div className="navbar--right">
					<div className="icon-container">
						<NotificationsNone />
						<span className="icon-badge">2</span>
					</div>
					<div className="icon-container">
						<Language />
					</div>
					<div className="icon-container">
						<Settings />
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
