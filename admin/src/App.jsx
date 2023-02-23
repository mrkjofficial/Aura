import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<Sidebar />
				<Home />
			</div>
		</div>
	);
}

export default App;
