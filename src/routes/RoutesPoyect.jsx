import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexPage/IndexPage";
import ProductPage from "../pages/productPage/ProductPage";
import LoginPage from "../pages/loginPage/LoginPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
const RoutesPoyect = () => {
    
	return (
		<Routes>
			<Route path="/" element={<IndexPage />}></Route>
			<Route path="/products" element={<ProductPage />}></Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/*" element={<NotFoundPage/>}></Route>
		</Routes>
	);
};

export default RoutesPoyect;
