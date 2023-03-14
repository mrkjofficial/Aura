import "./Users.scss";

import { DataGrid } from "@mui/x-data-grid";

import { users } from "../../data/data.js";

const columns = [
	{ field: "id", headerName: "ID", width: 100 },
	{
		field: "name",
		headerName: "User",
		width: 200,
		renderCell: (params) => {
			return (
				<div className="user">
					<img className="user-img" src={params.row.img} alt="user-img" />
					{params.row.name}
				</div>
			);
		},
	},
	{ field: "email", headerName: "Email", width: 250 },
	{ field: "status", headerName: "Status", width: 150 },
	{ field: "transaction", headerName: "Transaction", width: 250 },
	{ field: "action", headerName: "Action", width: 150, renderCell: (params) => {
		return (
			<div className="action">
				<button className="action-btn">Edit</button>
				<button className="action-btn">Delete</button>
			</div>
		);
	}}
];

const Users = () => {
	return (
		<div className="users">
			<DataGrid rows={users} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />
		</div>
	);
};

export default Users;
