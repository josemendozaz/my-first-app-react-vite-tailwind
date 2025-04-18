import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const ProjectCardResponsive = () => {
	const navigate	= useNavigate();
	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-br from-rose-300 to-rose-500">
			<section className="bg-[#221E1E] text-white rounded-2xl p-6 flex flex-col items-center gap-6 transition-all duration-300 mx-14 md:flex-row">
				<div className="w-48 h-48 rounded-full overflow-hidden border-[12.5px] border-[#221E1E] -mt-32 sm:w-[330px] sm:h-[290px] sm:rounded-[20px] sm:border-0 transition-all duration-300 ease-in-out md:mt-[25px] md:ml-[-60px] md:mb-[25px]">
					<img className="w-full h-full object-cover" src="https://i.ibb.co/GfLLpbb0/fd8c7d0c08c7ff5ff8d5956501624548.jpg" alt=""/>
				</div>
				<div className="mt-5 flex flex-col items-start text-left max-w-lg">
					<h2 className="text-3xl font-bold">José Mendoza Zavala</h2>
					<span className="text-lg opacity-70">Developer Full-Stack</span>
					<p className="text-sm mt-2 text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam dolorem sequi repudiandae voluptatibus quia ea officiis sunt, culpa a exercitationem ullam alias esse tempora possimus quod ex officia deserunt!
					</p>
					<div className="flex mt-4 gap-4 mx-auto sm:mx-0 md:mx-0">
						<a className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#363234] hover:scale-110 cursor-pointer transition-transform duration-300" href={e => e.preventDefault()}>
							<Icon className="w-[20px] h-[20px]" icon="proicons:html"/>
						</a>
						<a className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#363234] hover:scale-110 cursor-pointer transition-transform duration-300" href={e => e.preventDefault()}>
							<Icon className="w-[20px] h-[20px]" icon="mdi:tailwind"/>
						</a>
						<a className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#363234] hover:scale-110 cursor-pointer transition-transform duration-300" href={e => e.preventDefault()}>
							<Icon className="w-[20px] h-[20px]" icon="devicon-plain:angular"/>
						</a>
						<a className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#363234] hover:scale-110 cursor-pointer transition-transform duration-300" href={e => e.preventDefault()}>
							<Icon className="w-[20px] h-[20px]" icon="file-icons:nestjs"/>
						</a>
					</div>
					<div className="flex mt-4 items-center justify-center w-full">
						<button className="cursor-pointer w-full bg-amber-50 text-black rounded-md p-1 font-semibold" onClick={() => navigate("/")}>
							Volver
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}
