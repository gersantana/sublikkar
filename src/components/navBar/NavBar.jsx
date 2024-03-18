import { Link } from "react-scroll";
import {Buscador} from "../buscador/Buscador";
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const NavBar = () => {
	const [click, setClick] = useState(false);
	const darClick = () => setClick(!click);
	const contenido = <>
	<div className="lg:hidden block absolute top-[14%] w-full left-0 right-0 bg-slate-400 transition">
		<ul className="text-center text-xl p-10">
		<Link spy={true} smooth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Inicio</li>
		</Link>
		<Link spy={true} smooth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Comprar Todo</li>
		</Link>
		<Link spy={true} smooth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Acerca de</li>
		</Link>
		<Link spy={true} smooth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Blog</li>
		</Link>
		<Link spy={true} smooth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
		</Link>
		<Link spy={true} smooth={true} to="/">
			<li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Miembros</li>
		</Link>
		</ul>
	</div>
	</>
  return (
	<nav>
		<div className="flex items-center justify-between gap-2">
				<div className="ml-10 mt-5">
					<img src="./img/logo.png" alt="logo" />
				</div>
				<div className="mt-5">
				<Buscador></Buscador>
				</div>
				<div className="flex items-center justify-start mr-10">
				<ul className="flex gap-5 mr-10 text-[14px] text-white">
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Ingresar</li>
					</Link>
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Registrarce</li>
					</Link>
					<Link><li className="p-5 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
						<FaCartShopping></FaCartShopping>
						</li></Link>
					</ul>
				</div>
				
			</div>
		<div className="h-10vh flex justify-between z-10 text-white lg:py-5 px-20 py-1">
			<div className="lg:flex md:flex lg: flex-1 items-center justify-center font-normal hidden">
				<div className= "flex-10">
					<ul className="flex gap-5 mr-10 text-[14px]">
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Inicio</li>
					</Link>
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Comprar Todo</li>
					</Link>
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Acerca de</li>
					</Link>
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Blog</li>
					</Link>
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacto</li>
					</Link>
					<Link spy={true} smooth={true} to="/">
						<li className="p-4 bg-[#4fb4b9] rounded-full hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Miembros</li>
					</Link>
					</ul>
				</div>
			</div>
			<div>
				{click && contenido};
			</div>
			<button className="block md:hidden transtion text-black" onClick={darClick}>
				{click ? <FaTimes/> : <GiHamburgerMenu/> } 
			</button>
		</div>
	</nav>
  );
}

export default NavBar;