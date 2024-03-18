import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

	const Footer = () => {
		// const {newsLeterEmail, setNewsLeterEmail} = useState("")
		const [newsLetterData, setNewsLetterData] = useState({
			nombre:"",
			email:""
		})

		const handleChange = (e) => {
			const {name, value} = e.target
			setNewsLetterData({...newsLetterData,[name]:value})
		}

		const handleSubmit = (e) => {
			e.preventDefault();
			const trimmedData = {
				nombre: newsLetterData.nombre.trim(),
				email: newsLetterData.email.trim()
			};
			console.log('datos enviados', trimmedData)
			setNewsLetterData({
				nombre:"",
				email:""
			})
		}

		return (
			<footer className="bg-slate-200">
				<div className="sm:flex sm:flex-row-reverse sm:justify-between">
					<form className="bg-cyan-700 flex flex-col gap-2 p-5 sm:bg-cyan-700 sm:w-6/12 lg:w-6/12" onSubmit={handleSubmit} method="post">
						<h2 className="flex justify-center text-center text-xl ">Regístrate a nuestra NewsLetter</h2>
						<div className="flex flex-col">
							<label htmlFor="input_nombre">Nombre:</label>
							<input 
								className="border bg-slate-100 outline-none focus:ring-1 focus:ring-red-700 transition rounded-full h-10 px-4" 
								type="text"
								value={newsLetterData.nombre}
								onChange={handleChange} 
								name="nombre" 
								id="input_nombre" 
								placeholder="Primer nombre" 
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="input_email">Email:</label>
							<input 
								className="border bg-slate-100 outline-none focus:ring-1 focus:ring-red-700 transition rounded-full h-10 px-4" 
								type="email"
								value={newsLetterData.email}
								onChange={handleChange}
								name="email" 
								id="input_email" 
								placeholder=" ejmplo@...com" 
								required 
							/>
						</div>
						<button type="submit" className="bg-orange-600 mx-auto rounded-full mt-3 w-60 h-9 hover:bg-orange-300 transition">Suscribirme</button>
					</form>
					<div className=" flex flex-col justify-center m-auto items-center py-4 border border-t-slate-400 sm:border-none">
						<h2 className="underline text-lg font-medium">Mas información</h2>
						<Link className="hover:text-red-600  hover:underline transition-all">Nosotros</Link>
						<Link className="hover:text-red-600  hover:underline transition-all">Soporte</Link>
						<Link className="hover:text-red-600 hover:underline transition-all">Servicios</Link>
					</div>
				</div>

				<div className="flex flex-col justify-center place-items-center py-3 bg-slate-600">
					<div className="flex justify-center gap-3 py-2">
						<Link to={'https://www.instagram.com/sublikkar?igsh=Y3ZxcWM1MDNoNzl2'} target="blank">
							<FaInstagram className="text-3xl text-gray-300" />
						</Link>
						<Link target="blank">
							<FaFacebook className="text-3xl text-gray-300" />
						</Link>
						<Link to={'https://wa.link/e19qkr'} target="blank">
							<FaWhatsapp className="text-3xl  text-gray-300" />
						</Link>
					</div>
					<a href=""></a>
					<h4 className=" text-gray-300">Sublikkar 2024. Todos los derechos reservados</h4>
				</div>
			</footer>
		);
	};

	export default Footer;
