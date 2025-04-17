import { CardMenu } from "../components/HomeComponents/CardMenu";
import { projects } from "../data/data";
import { useThemeStore } from "../store/useThemeStore"

export const Home = () => {
	const { theme, toggleTheme }	= useThemeStore();

	return (
		<main className="bg-primary text-black h-screen dark:bg-primary-dark dark:text-white flex flex-col items-center justify-center overflow-hidden">
			<section className="rounded-lg min-w-[450px] p-4">
				<h1 className="text-black dark:text-white text-4x1 font-bold mb-4">
					PROYECTOS
				</h1>
				{
					projects.map((item,index)=>{
						return (<CardMenu item={item} index={index} />)
					})
				}
			</section>
			<br /><br />
			<button class="p-2 rounded-lg bg-white dark:bg-black dark:text-white font-semibold" type="button" onClick={ toggleTheme }>
				{ theme == "light" ? "🌞 Modo claro" : "🌚 Modo Oscuro" }
			</button>
		</main>
	)
}
