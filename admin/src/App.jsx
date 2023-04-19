import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router className="app">
			<Navbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/user/:userId" element={<User />} />
					<Route path="/users" element={<Users />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
