import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Prueba } from "../pages/Prueba";
import { ProjectCardResponsive } from "../pages/ProjectCardResponsive";
import { ProjectChat } from "../pages/ProjectChat";
import { ProjectLandingPage } from "../pages/ProjectLandingPage";
import { ProjectSimpleCard } from "../pages/ProjectSimpleCard";

export function MyRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/card-pink-panther" element={<ProjectCardResponsive />} />
				<Route path="/simple-card" element={<ProjectSimpleCard />} />
				<Route path="/landing-page" element={<ProjectLandingPage />} />
				<Route path="/template-discord-chat" element={<ProjectChat />} />
				<Route path="/prueba" element={<Prueba />} />
			</Routes>
		</BrowserRouter>
	)
}
