import "./NewUsers.scss";
import { Visibility } from "@mui/icons-material";

const NewUsers = ({ newusers }) => {
	return (
		<div className="new-users">
			<span className="new-users__title">New Users</span>
			<ul className="new-users__list">
				{newusers.map((user) => (
					<li className="new-users__list-item" key={user.id}>
						<div className="new-users__user">
							<div className="new-users__avatar">
								<img src={user.img} alt="user-img" className="new-users__user-img" />
							</div>
							<div className="new-users__info">
								<span className="new-users__name">{user.name}</span>
								<span className="new-users__email">{user.email}</span>
							</div>
						</div>
						<button className="new-users__button" type="button">
							<Visibility className="new-users__display-icon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NewUsers;
