import "./NewUser.scss";
import { Upload } from "@mui/icons-material";

const NewUser = () => {
	return (
		<div className="new-user">
			<h1 className="new-user__title">New User</h1>
			<form className="new-user__form">
				<div className="new-user__details">
					<div className="new-user__item">
						<label htmlFor="username">Username</label>
						<input autoComplete="on" id="username" placeholder="john" type="text" />
					</div>
					<div className="new-user__item">
						<label htmlFor="fullname">Full Name</label>
						<input autoComplete="on" id="fullname" placeholder="John Smith" type="text" />
					</div>
					<div className="new-user__item">
						<label htmlFor="email">Email</label>
						<input autoComplete="on" id="email" placeholder="johnsmith@gmail.com" type="email" />
					</div>
					<div className="new-user__item">
						<label htmlFor="password">Password</label>
						<input autoComplete="on" id="password" placeholder="password" type="password" />
					</div>
					<div className="new-user__item">
						<label htmlFor="phone">Phone</label>
						<input autoComplete="on" id="phone" placeholder="+1 123 456 78" type="text" />
					</div>
					<div className="new-user__item">
						<label htmlFor="address">Address</label>
						<input autoComplete="on" id="address" placeholder="New York | USA" type="text" />
					</div>
					<div className="new-user__item">
						<p>Gender</p>
						<div className="new-user__gender">
							<input autoComplete="on" id="male" name="gender" type="radio" />
							<label htmlFor="male">Male</label>
							<input autoComplete="on" id="female" name="gender" type="radio" />
							<label htmlFor="female">Female</label>
							<input autoComplete="on" id="others" name="gender" type="radio" />
							<label htmlFor="others">Others</label>
						</div>
					</div>
					<div className="new-user__item">
						<label htmlFor="active">Active</label>
						<select name="active" id="active" className="new-user__select">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div className="new-user__picture">
					<div className="new-user__file">
						<img
							src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg"
							alt="avatar"
							className="new-user__avatar"
						/>
						<label htmlFor="avatar" className="new-user__file-label">
							<Upload className="new-user__file-icon" />
						</label>
						<input id="avatar" className="new-user__file-input" type="file" />
					</div>
					<div className="new-user__submit-group">
						<input type="submit" className="new-user__create-button" value="Create" />
						<input type="reset" className="new-user__reset-button" value="Clear" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewUser;
