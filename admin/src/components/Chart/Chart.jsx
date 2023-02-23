import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./Chart.scss";

const Chart = ({data, datakey, grid, title, xlabel, ylabel}) => {
	return (
		<div className="chart">
			<h3 className="chart__title">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					{grid && <CartesianGrid strokeDasharray="5 5" />}
					<Line type="monotone" dataKey={datakey} />
					<Tooltip />
					<XAxis dataKey={xlabel} />
					<YAxis dataKey={ylabel}/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
