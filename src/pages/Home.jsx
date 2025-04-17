import { CardMenu } from "../components/HomeComponents/CardMenu";
import { projects } from "../data/data";
import { useThemeStore } from "../store/useThemeStore"

export const Home = () => {
	const { theme, toggleTheme }	= useThemeStore();

	return (
		<main className="bg-primary text-black h-screen dark:bg-primary-dark dark:text-white flex flex-col items-center justify-center overflow-hidden">
			<section className="rounded-lg min-w-[450px] p-4">
				<h1 className="text-black dark:text-white text-4xl font-bold mb-4 flex items-center gap-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/></svg>
					PROYECTOS
				</h1>
				{
					projects.map((item,index)=>{
						return (<CardMenu key={index} item={item} index={index} />)
					})
				}
			</section>
			<br /><br />
			<button className="p-2 rounded-lg bg-white dark:bg-black dark:text-white font-semibold" type="button" onClick={ toggleTheme }>
				{ theme == "light" ? "🌞 Modo claro" : "🌚 Modo Oscuro" }
			</button>
		</main>
	)
}
