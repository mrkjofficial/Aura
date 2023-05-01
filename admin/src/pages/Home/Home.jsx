import "./Home.scss";
import Chart from "../../components/Chart/Chart";
import NewUsers from "../../components/NewUsers/NewUsers";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import LatestTransactions from "../../components/LatestTransactions/LatestTransactions";
import { monthly_active_users, new_users, latest_transactions } from "../../data/data.js";

const Home = () => {
	const stroke = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
	return (
		<div className="home">
			<div className="home__container">
				<FeaturedInfo />
				<Chart
					data={monthly_active_users}
					datakey={"Active Users"}
					grid
					stroke={stroke}
					title={"User Analytics"}
					xlabel={"Month"}
				/>
				<div className="home__widgets">
					<NewUsers newusers={new_users} />
					<LatestTransactions latesttransactions={latest_transactions} />
				</div>
			</div>
		</div>
	);
};

export default Home;
