
import { Icon } from "@iconify/react/dist/iconify.js";
import { BsPlus, BsFillLightningFill, BsGearFill, BsSun, BsMoon } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../../store/useThemeStore";

export const Sidebar = () => {
	const navigate					= useNavigate();
	const { theme, toggleTheme }	= useThemeStore();
	return (
		<section className="top-0 left-0 h-screen bg-white dark:bg-[#1E1F22] shadow-lg  md:flex flex-col w-16">
			<SideBarIcon text="Home" functionX={()=>navigate('/')} icon={<Icon icon="ic:baseline-discord" width={24} height={24}/>}/>
			<Divider/>
			<SideBarIcon icon={<BsPlus size={24}/>}/>
			<SideBarIcon icon={<BsFillLightningFill size={24}/>}/>
			<SideBarIcon icon={<FaPoo size={24}/>}/>
			<Divider/>
			<div onClick={ toggleTheme }>
				{
					theme == "light" ? <SideBarIcon text="Cambiar a modo oscuro" icon={<BsSun size={24}/>}/> : <SideBarIcon text="Cambiar a modo claro" icon={<BsMoon size={24}/>}/>
				}
			</div>
			<SideBarIcon icon={<BsGearFill size={24}/>}/>
		</section>
	)
};

const SideBarIcon = ({ icon, text = "tooltip 🍕", functionX }) => (
	<div onClick={functionX} className="group relative flex items-center justify-center h-12 w-12 mx-2 my-2 bg-gray-400 dark:bg-[#313338] text-white hover:text-white/80 rounded-full hover:rounded-xl transition-all duration-100 ease-linear cursor-pointer shadow-lg">
		{ icon }
		<span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md bg-[#141414] text-white transition-all duration-100 scale-0 origin-left group-hover:scale-100">
			{ text }
		</span>
	</div>
);

const Divider = () => <hr className="bg-gray-200 dark:bg-[#3a3a3a] border border-gray-200 dark:border-[#3a3a3a] rounded-full mx-2"/>
