import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.scss";
import data from "../../data/data.json";

const Home = () => {
	return (
		<div className="container">
			<div className="wrapper">
				<FeaturedInfo />
				<Chart data={data.userdata} datakey={"Active Users"} grid title={"User Analytics"} xlabel={"Month"} />
			</div>
		</div>
	);
};

export default Home;
