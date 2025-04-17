import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Prueba } from "../pages/Prueba";

export function MyRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/prueba" element={<Prueba />} />
			</Routes>
		</BrowserRouter>
	)
}
