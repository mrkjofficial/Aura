import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import NewUsers from "../../components/NewUsers/NewUsers";
import LatestTransactions from "../../components/LatestTransactions/LatestTransactions";
import "./Home.scss";
import data from "../../data/data.json";

const Home = () => {
	return (
		<div className="home">
			<div className="wrapper">
				<FeaturedInfo />
				<Chart data={data.usersdata} datakey={"Active Users"} grid stroke={"#4caba6"} title={"User Analytics"} xlabel={"Month"} />
				<div className="home-widgets">
					<NewUsers newusers={data.newusers}/>
					<LatestTransactions latesttransactions={data.latesttransactions}/>
				</div>
			</div>
		</div>
	);
};

export default Home;
