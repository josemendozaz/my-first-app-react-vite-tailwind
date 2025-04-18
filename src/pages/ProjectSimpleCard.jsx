import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";


import andorImage from '../../src/assets/andor.png'; // Ajusta la ruta relativa si es necesario


export const ProjectSimpleCard = () => {
	const navigate	= useNavigate();
	return (
		<div className="bg-amber-50 h-screen flex justify-center items-center">
			<section className="bg-linear-to-r from-[#EAB37C] to-[#FDA241] rounded-2xl p-4 flex gap-5 cursor-pointer" onClick={() => navigate("/")}>
				<article className="flex flex-col justify-center gap-2">
					<section className="bg-[#FFF0E6] text-[#F18313] rounded-[8px] px-4 py-1 flex gap-2">
						<div className="inline-block">
							<Icon icon="solar:star-ring-bold" width="24" height="24" />
						</div>
						<button className="font-bold">New Episode!</button>
					</section>
					<section className="flex flex-col">
						<span className="font-bold">
							Andor Season Two
						</span>
						<span className="text-black/50 font-semibold">
							S2 E3 - Lorem ipsum dolor sit
						</span>
					</section>
				</article>
				<article className="relative flex items-end h-[100px]">
					<img className="h-50 relative -bottom-4" src={andorImage} alt=""/>
				</article>
			</section>
		</div>
	)
}
