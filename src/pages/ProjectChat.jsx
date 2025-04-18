import { ChannelBar } from "../components/ProjectChatComponents/ChannelBar";
import { ContentContainer } from "../components/ProjectChatComponents/ContentContainer";
import { Sidebar } from "../components/ProjectChatComponents/Sidebar";

export const ProjectChat = () => {
	return (
		<main className="flex h-screen">
			<Sidebar/>
			<ChannelBar/>
			<ContentContainer/>
		</main>
	)
};
