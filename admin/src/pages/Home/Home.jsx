import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import NewUsers from "../../components/NewUsers/NewUsers";
import LatestTransactions from "../../components/LatestTransactions/LatestTransactions";
import "./Home.scss";
import {monthly_active_users, new_users, latest_transactions} from "../../data/data.js";

const Home = () => {
	return (
		<div className="home">
			<div className="wrapper">
				<FeaturedInfo />
				<Chart data={monthly_active_users} datakey={"Active Users"} grid stroke={"#4caba6"} title={"User Analytics"} xlabel={"Month"} />
				<div className="home-widgets">
					<NewUsers newusers={new_users}/>
					<LatestTransactions latesttransactions={latest_transactions}/>
				</div>
			</div>
		</div>
	);
};

export default Home;
