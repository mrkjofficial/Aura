import "./User.scss";
import { MailOutline, MyLocation, PersonOutline, Smartphone, Today, Upload } from "@mui/icons-material";

const User = () => {
	return (
		<div className="user">
			<div className="user__title-container">
				<h1 className="user__title">Edit User</h1>
			</div>
			<div className="user__container">
				<div className="user__view-pane">
					<span className="user__view-title">Details</span>
					<div className="user__view-heading">
						<img
							src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg"
							alt="avatar"
							className="user__view-heading-avatar"
						/>
						<div className="user__view-heading-title">
							<span className="user__name">Anna Becker</span>
							<span className="user__designation">Software Engineer</span>
						</div>
					</div>
					<div className="user__view-details">
						<div className="user__view-details-title">Account Details</div>
						<div className="user__view-details-info">
							<PersonOutline className="user__view-details-icon" />
							<span className="user__view-details-text">annabecker99</span>
						</div>
						<div className="user__view-details-info">
							<Today className="user__view-details-icon" />
							<span className="user__view-details-text">09-09-1994</span>
						</div>
						<div className="user__view-details-title">Contact Details</div>
						<div className="user__view-details-info">
							<Smartphone className="user__view-details-icon" />
							<span className="user__view-details-text">+91 99336 27730</span>
						</div>
						<div className="user__view-details-info">
							<MailOutline className="user__view-details-icon" />
							<span className="user__view-details-text">annabecker99@gmail.com</span>
						</div>
						<div className="user__view-details-info">
							<MyLocation className="user__view-details-icon" />
							<span className="user__view-details-text">New York | USA</span>
						</div>
					</div>
				</div>
				<div className="user__update-pane">
					<span className="user__update-title">Edit</span>
					<form className="user__update-form">
						<div className="user__update-details">
							<div className="user__update-item">
								<label className="user__update-label" htmlFor="username">
									Username
								</label>
								<input
									id="username"
									className="user__update-input"
									type="text"
									placeholder="annabecker99"
								/>
							</div>
							<div className="user__update-item">
								<label className="user__update-label" htmlFor="fullName">
									Full Name
								</label>
								<input
									id="fullName"
									className="user__update-input"
									type="text"
									placeholder="Anna Becker"
								/>
							</div>
							<div className="user__update-item">
								<label className="user__update-label" htmlFor="email">
									Email
								</label>
								<input
									id="email"
									className="user__update-input"
									type="email"
									placeholder="annabecker99@gmail.com"
								/>
							</div>
							<div className="user__update-item">
								<label className="user__update-label" htmlFor="phone">
									Phone
								</label>
								<input
									id="phone"
									className="user__update-input"
									type="text"
									placeholder="+91 99336 27730"
								/>
							</div>
							<div className="user__update-item">
								<label className="user__update-label" htmlFor="address">
									Address
								</label>
								<input
									id="address"
									className="user__update-input"
									type="text"
									placeholder="New York | USA"
								/>
							</div>
						</div>
						<div className="user__update-picture">
							<div className="user__update-file">
								<img
									src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg"
									alt="avatar"
									className="user__update-file-avatar"
								/>
								<label htmlFor="avatar" className="user__update-file-label">
									<Upload className="user__update-file-icon"/>
								</label>
								<input id="avatar" className="user__update-file-input" type="file" />
							</div>
							<div className="user__update-submit-group">
								<input type="submit" className="user__update-button" value="Update" />
								<input type="reset" className="user__reset-button" value="Clear" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
