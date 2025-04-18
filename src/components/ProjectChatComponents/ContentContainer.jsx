import { Icon } from "@iconify/react/dist/iconify.js";

export const ContentContainer = () => {
	return (
		<section className="flex flex-col bg-gray-300 dark:bg-[#313338] h-full w-full overflow-hidden justify-between">
			<div className="h-full overflow-y-scroll">
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
				<Post name={"Ada"} timestamp={"hoy"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt officia. Molestias, animi voluptates. Libero ullam, blanditiis corrupti deleniti ipsa animi suscipit eveniet minima labore. Vitae explicabo placeat fugiat cumque!"}/>
			</div>
			<BottomBar/>
		</section>
	)
};

const Post = ({name,timestamp,text})=>{
	const seed = Math.floor( Math.random() * 898 ) + 1;
	return (
		<div className="w-full flex flex-row items-center justify-evenly py-4 px-8 cursor-pointer gap-4">
			<img className="bg-[#ffffff] w-12 rounded-full mb-auto p-0.5" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${seed}.png`} alt="" />
			<div className="flex flex-col justify-star">
				<p className="text-left font-semibold text-gray-800 dark:text-white mr-2">
					{name}
					<small className="text-xs text-left font-semibold text-gray-500 dark:text-gray-600 ml-2">
						{ timestamp }
					</small>
				</p>
				<p className="text-lg text-left text-gray-800 dark:text-white">
					{ text }
				</p>
			</div>
		</div>
	)
};

const BottomBar = () => (
	<div className="flex items-center justify-between bottom-2 right-8 rounded-lg bg-gray-400 dark:bg-[#383A40] gap-3 px-2 h-12 m-2">
		<Icon className="text-primary" icon="zondicons:add-solid" width="20" height="29" />
		<input type="text" placeholder="Ingrese el mensaje" className="font-semibold w-full bg-transparent outline-none text-gray-500 dark:text-gray-400 placeholder-gray-500 cursor-text p-3"/>
	</div>
);
