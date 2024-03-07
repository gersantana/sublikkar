import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ECommerceProvider } from "./context/ContextProyect.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ECommerceProvider>
				<App />
			</ECommerceProvider>
		</BrowserRouter>
	</React.StrictMode>
);
