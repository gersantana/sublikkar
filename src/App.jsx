import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar"
import RoutesPoyect from "./routes/RoutesPoyect";

const App = () => {
	return (
		<>
			<NavBar/>
			<RoutesPoyect/>
			<Footer/>
		</>
	);
};

export default App;
