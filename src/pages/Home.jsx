import { Icon } from "@iconify/react/dist/iconify.js";
import { CardMenu } from "../components/HomeComponents/CardMenu";
import { projects } from "../data/data";
import { useThemeStore } from "../store/useThemeStore"

export const Home = () => {
	const { theme, toggleTheme }	= useThemeStore();
	return (
		<main className="bg-primary text-black h-full dark:bg-primary-dark dark:text-white flex flex-col items-center justify-center pt-5">
			<section className="rounded-lg min-w-[450px] p-4">
				<h1 className="text-black dark:text-white text-4xl font-bold mb-4 flex items-center gap-4">
					<Icon icon="catppuccin:tailwind" width="40" height="40" />
					PROYECTOS
				</h1>
				{
					projects.map((item,index)=>{
						return (<CardMenu key={index} item={item} index={index} />)
					})
				}
			</section>
			<br /><br />
			<button className="p-2 rounded-lg bg-white dark:bg-black dark:text-white font-semibold cursor-pointer mb-10" type="button" onClick={ toggleTheme }>
				{ theme == "light" ? "🌞 Modo claro" : "🌚 Modo Oscuro" }
			</button>
		</main>
	)
}
