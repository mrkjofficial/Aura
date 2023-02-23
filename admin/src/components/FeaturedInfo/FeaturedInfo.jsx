import "./FeaturedInfo.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
	return (
		<div className="featured-info">
			<div className="featured-item">
				<span className="featured-item__title">Revenue</span>
				<div className="featured-item__money-container">
					<span className="featured-item__money">$2,415</span>
					<span className="featured-item__money-rate">
						-11.4 <ArrowDownward className="featured-item__money-icon negative" />
					</span>
				</div>
				<span className="featured-item__subtitle">Compared to last month</span>
			</div>
            <div className="featured-item">
				<span className="featured-item__title">Sales</span>
				<div className="featured-item__money-container">
					<span className="featured-item__money">$4,415</span>
					<span className="featured-item__money-rate">
						-1.4 <ArrowDownward className="featured-item__money-icon negative" />
					</span>
				</div>
				<span className="featured-item__subtitle">Compared to last month</span>
			</div>
            <div className="featured-item">
				<span className="featured-item__title">Cost</span>
				<div className="featured-item__money-container">
					<span className="featured-item__money">$2,225</span>
					<span className="featured-item__money-rate">
						+2.4 <ArrowUpward className="featured-item__money-icon" />
					</span>
				</div>
				<span className="featured-item__subtitle">Compared to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
