import "./LatestTransactions.scss";
import { Cached, Clear, Done } from "@mui/icons-material";

const LatestTransactions = ({ latesttransactions }) => {
	return (
		<div className="latest-transactions">
			<span className="latest-transactions__title">Latest Transactions</span>
			<table className="latest-transactions__table">
				<thead>
					<tr className="latest-transactions__table-row">
						<th className="latest-transactions__table-header">Customer</th>
						<th className="latest-transactions__table-header">Date</th>
						<th className="latest-transactions__table-header">Amount</th>
						<th className="latest-transactions__table-header">Status</th>
					</tr>
				</thead>
				<tbody>
					{latesttransactions.map((transaction) => (
						<tr className="latest-transactions__table-row" key={transaction.id}>
							<td className="latest-transactions__user">
								<img src={transaction.img} alt="user-img" className="latest-transactions__user-img" />
								<span className="latest-transactions__user-name">{transaction.name}</span>
							</td>
							<td className="latest-transactions__date">{transaction.date}</td>
							<td className="latest-transactions__amount">{transaction.amount}</td>
							<td className="latest-transactions__status">
								{transaction.status === "approved" && (
									<button className="latest-transactions__button approved">
										<Done className="latest-transactions__display-icon" />
										Approved
									</button>
								)}
								{transaction.status === "pending" && (
									<button className="latest-transactions__button pending">
										<Cached className="latest-transactions__display-icon" />
										Pending
									</button>
								)}
								{transaction.status === "declined" && (
									<button className="latest-transactions__button declined">
										<Clear className="latest-transactions__display-icon" />
										Declined
									</button>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default LatestTransactions;
