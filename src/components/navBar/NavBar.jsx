import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="bg-amber-400 ">
			<div>
				<NavLink to={"/"}>
					<img src="Aqui el logo" alt="logo" />
				</NavLink>
			</div>
			<ul className="flex space-x-4">
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
