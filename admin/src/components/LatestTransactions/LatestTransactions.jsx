import "./LatestTransactions.scss";

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
								<button className={`latest-transactions__button ${transaction.status}`}>
									{transaction.status}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default LatestTransactions;
