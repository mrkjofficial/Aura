import "./Users.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Circle, Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { users } from "../../data/data.js";

const Users = () => {
	const [data, setData] = useState(users);
	const navigate = useNavigate();
	const columns = [
		{ field: "id", headerName: "ID", width: 100 },
		{
			field: "name",
			headerName: "Name",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="users__name">
						<img className="users__user-img" src={params.row.img} alt="user-img" />
						{params.row.name}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 250 },
		{
			field: "status",
			headerName: "Status",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="users__status">
						<Circle className={`users__status-indicator ${params.row.status}`} />
						{params.row.status}
					</div>
				);
			},
		},
		{ field: "transaction", headerName: "Transaction", width: 250 },
		{
			field: "actions",
			headerName: "Actions",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="users__actions">
						<button className="users__actions-edit" onClick={() => navigate("/user/" + params.row.id)}>
							<Edit className="users__actions-edit-icon" />
						</button>
						<button
							className="users__actions-delete"
							onClick={() => setData(data.filter((item) => item.id != params.row.id))}
						>
							<Delete className="users__actions-delete-icon" />
						</button>
					</div>
				);
			},
		},
	];
	return (
		<div className="users">
			<div className="users__title-container">
				<h1 className="users__title">Users</h1>
				<button className="users__add-button">Add</button>
			</div>
			<DataGrid
				className="users__table"
				rows={data}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[10]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</div>
	);
};

export default Users;
