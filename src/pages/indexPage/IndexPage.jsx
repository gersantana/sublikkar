import { useContext } from "react";
import { ECommerceContext } from "../../context/ContextProyect";

const IndexPage = () => {

	const {pruebaContext} =  useContext(ECommerceContext)

	return (
		<div>
			<h1>Soy la pagina de inicio</h1>
			<h2>{pruebaContext}</h2>
		</div>
	);
};

export default IndexPage;
