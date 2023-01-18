const express = require("express");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());

dotenv.config();

mongoose.set("strictQuery", true);

mongoose
	.connect(process.env.CONNECTION_STRING)
	.then(() => {
		console.log("Database Connected!");
	})
	.catch((err) => {
		console.log(err);
	});

app.use("/api/auth", authRoute);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server is running on port ${process.env.SERVER_PORT}!`);
});
