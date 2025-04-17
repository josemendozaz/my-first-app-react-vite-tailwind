import './App.css'
import { MyRoutes } from './routes/routes'
import { useThemeStore } from './store/useThemeStore'

function App() {
	const { theme }	= useThemeStore();
	document.documentElement.classList.toggle("dark", theme==="dark");
	return ( <MyRoutes/> )
}

export default App
