import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<div>
				<NavLink to={"/"}>
					<img src="Aqui el logo" alt="logo" />
				</NavLink>
			</div>
			<ul>
				<li>
					<NavLink to={"/"}>Init</NavLink>
				</li>
				<li>
					<NavLink to={"/products"}>Products</NavLink>
				</li>
				<li>
					<NavLink to={"/login"}>LogIn</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
