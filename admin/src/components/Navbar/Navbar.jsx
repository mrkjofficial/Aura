import "./Navbar.scss";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__container">
				<div className="navbar--left">
					<span className="logo">AURA</span>
				</div>
				<div className="navbar--right">
					<div className="navbar__icon-container">
						<NotificationsNone className="navbar__icon" />
						<span className="navbar__icon-badge">2</span>
					</div>
					<div className="navbar__icon-container">
						<Language className="navbar__icon" />
					</div>
					<div className="navbar__icon-container">
						<Settings className="navbar__icon" />
					</div>
					<img
						src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg"
						alt="user-avatar"
						className="navbar__user-avatar"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
