import { NavLink } from "react-router-dom";
import {Buscador} from "../buscador/Buscador";
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export const NavBar = () => {
	const [click, setClick] = useState(false);
	const darClick = () => setClick(!click);
	const contenido = <>
	<div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
		{/* BUSCADOR E INICIO SESION */}

		{/* BUSCADOR E INICIO SESION */}
		<ul className="text-center text-xl p-20">
		<NavLink spy={true} smoorth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Inicio</li>
		</NavLink>
		<NavLink spy={true} smoorth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Comprar Todo</li>
		</NavLink>
		<NavLink spy={true} smoorth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Acerca de</li>
		</NavLink>
		<NavLink spy={true} smoorth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Blog</li>
		</NavLink>
		<NavLink spy={true} smoorth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
		</NavLink>
		<NavLink spy={true} smoorth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Miembros</li>
		</NavLink>
		</ul>
	</div>
	</>
  return (
	<nav>
		<div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
			<div className="flex items-center flex-1">
				<img src="./img/logo.png" alt="logo" />
			</div>
			<Buscador></Buscador>
			<div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
				<div className= "flex-10">
					<ul className="flex gap-8 mr-16 text-[18px]">
					<NavLink spy={true} smoorth={true} to="/">
						<li className="bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Inicio</li>
					</NavLink>
					<NavLink spy={true} smoorth={true} to="/">
						<li className="bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Comprar Todo</li>
					</NavLink>
					<NavLink spy={true} smoorth={true} to="/">
						<li className="bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Acerca de</li>
					</NavLink>
					<NavLink spy={true} smoorth={true} to="/">
						<li className="bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Blog</li>
					</NavLink>
					<NavLink spy={true} smoorth={true} to="/">
						<li className="bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacto</li>
					</NavLink>
					<NavLink spy={true} smoorth={true} to="/">
						<li className="bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Miembros</li>
					</NavLink>
					</ul>
				</div>
			</div>
			<div>
				{click && contenido};
			</div>
			<button className="block sm:hidden transtion" onclick={darClick}>
				{click ? <FaTimes/> : <GiHamburgerMenu/> } 
			</button>
		</div>
	</nav>
  );
}

export default NavBar;