import "./Chart.scss";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Chart = ({data, datakey, grid, stroke, title, xlabel, ylabel}) => {
	return (
		<div className="chart">
			<h3 className="chart__title">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					{grid && <CartesianGrid strokeDasharray="5 5" />}
					<Line type="monotone" dataKey={datakey} stroke={stroke}/>
					<Tooltip />
					<XAxis dataKey={xlabel} />
					<YAxis dataKey={ylabel}/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
