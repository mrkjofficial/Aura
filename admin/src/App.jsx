import "./App.scss";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";
import NewProduct from "./pages/NewProduct/NewProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/create" element={<NewProduct />} />
					<Route path="/product/:productId" element={<Product />} />
					<Route path="/users" element={<Users />} />
					<Route path="/user/create" element={<NewUser />} />
					<Route path="/user/:userId" element={<User />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
