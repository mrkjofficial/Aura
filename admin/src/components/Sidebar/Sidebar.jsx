import "./Sidebar.scss";
import { Link } from "react-router-dom";
import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	Home,
	MailOutline,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from "@mui/icons-material";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__container">
				<div className="sidebar__menu">
					<h3 className="sidebar__title">Dashboard</h3>
					<ul className="sidebar__list">
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<Home className="sidebar__icon" />
								Home
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<Timeline className="sidebar__icon" />
								Analytics
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<TrendingUp className="sidebar__icon" />
								Sales
							</Link>
						</li>
					</ul>
				</div>
				<div className="sidebar__menu">
					<h3 className="sidebar__title">Quick Menu</h3>
					<ul className="sidebar__list">
						<li className="sidebar__list-item">
							<Link to="/users" className="sidebar__link">
								<PermIdentity className="sidebar__icon" />
								Users
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/products" className="sidebar__link">
								<Storefront className="sidebar__icon" />
								Products
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<AttachMoney className="sidebar__icon" />
								Transactions
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<BarChart className="sidebar__icon" />
								Reports
							</Link>
						</li>
					</ul>
				</div>
				<div className="sidebar__menu">
					<h3 className="sidebar__title">Notifications</h3>
					<ul className="sidebar__list">
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<MailOutline className="sidebar__icon" />
								Mail
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<DynamicFeed className="sidebar__icon" />
								Feedback
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<ChatBubbleOutline className="sidebar__icon" />
								Messages
							</Link>
						</li>
					</ul>
				</div>
				<div className="sidebar__menu">
					<h3 className="sidebar__title">Staffs</h3>
					<ul className="sidebar__list">
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<WorkOutline className="sidebar__icon" />
								Manage
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<Timeline className="sidebar__icon" />
								Analytics
							</Link>
						</li>
						<li className="sidebar__list-item">
							<Link to="/" className="sidebar__link">
								<Report className="sidebar__icon" />
								Reports
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
