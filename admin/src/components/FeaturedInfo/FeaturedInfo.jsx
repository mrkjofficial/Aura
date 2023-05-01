import "./FeaturedInfo.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
	return (
		<div className="featured-info">
			<div className="featured-info__item">
				<span className="featured-info__title">Revenue</span>
				<div className="featured-info__money-container">
					<span className="featured-info__money">$2,415</span>
					<span className="featured-info__money-rate">
						-11.4 <ArrowDownward className="featured-info__money-icon negative" />
					</span>
				</div>
				<span className="featured-info__subtitle">Compared to last month</span>
			</div>
			<div className="featured-info__item">
				<span className="featured-info__title">Sales</span>
				<div className="featured-info__money-container">
					<span className="featured-info__money">$4,415</span>
					<span className="featured-info__money-rate">
						-1.4 <ArrowDownward className="featured-info__money-icon negative" />
					</span>
				</div>
				<span className="featured-info__subtitle">Compared to last month</span>
			</div>
			<div className="featured-info__item">
				<span className="featured-info__title">Cost</span>
				<div className="featured-info__money-container">
					<span className="featured-info__money">$2,225</span>
					<span className="featured-info__money-rate">
						+2.4 <ArrowUpward className="featured-info__money-icon" />
					</span>
				</div>
				<span className="featured-info__subtitle">Compared to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
