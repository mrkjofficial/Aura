import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<Sidebar />
				<div className="others">
					<h1>Others</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
