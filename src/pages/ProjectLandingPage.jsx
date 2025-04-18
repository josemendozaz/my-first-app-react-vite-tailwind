import { useNavigate } from "react-router-dom";

import tailwindImage from '../../src/assets/tailwind_css.png'; // Ajusta la ruta relativa si es necesario
import vegetaImage from '../../src/assets/vegeta.png'; // Ajusta la ruta relativa si es necesario


export const ProjectLandingPage = () => {
	const navigate	= useNavigate();
	return (
		<div className="h-screen bg-[#acf9fa] text-black">
			<header className="fixed top-0 left-0 w-full px-8 md:px-16">
				<nav className="flex justify-between items-center container mx-auto">
					<a className="font-bold text-sm md:text-xl" href={e => e.preventDefault()}>
						TAILWIND
					</a>
					<div className="hidden md:flex gap-6 text-sm md:text-lg">
						<a className="hover:text-gray-700 cursor-pointer" href={e => e.preventDefault()}>Home</a>
						<a className="hover:text-gray-700 cursor-pointer" href={e => e.preventDefault()}>Acerca de</a>
						<a className="hover:text-gray-700 cursor-pointer" href={e => e.preventDefault()}>Contacto</a>
					</div>
				</nav>
			</header>
			<main className="flex flex-col md:flex-row justify-center items-center px-8 md:px-16 gap-20 h-full">
				<section className="text-center md:text-left">
					<img className="h-30 md:h-50 mx-auto md:mx-0" src={tailwindImage} alt=""/>
					<h1 className="text-3xl md:text-5xl font-bold my-4">¿Entrenamos?</h1>
					<p className="mb-5 text-lg md:text-sm">
						Tailwind es<br/>cool
					</p>
					<button className="mt-10 bg-black text-white px-6 py-3 rounded-full hover:shadow-black transition shadow-lg cursor-pointer" onClick={() => navigate("/")}>
						Entrenar
					</button>
				</section>
				<img className="w-15 md:w-35 mt-[-60px] md:mt-0" src={vegetaImage} alt=""/>
			</main>
			<footer className="fixed bottom-0 text-center w-full p-2">
				<span>Tailwind</span>
				<span> | </span>
				<span>Company</span>
			</footer>
		</div>
	)
}
