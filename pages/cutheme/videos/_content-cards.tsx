import { Column, Container } from "rds-tailwind";
import VideoCard from "../_components/Videos/VideoCard";

export default function VideoCardContent() {
	return (
		<>
			<Container>
				<Column cols="2">
					<VideoCard />
					<VideoCard />
				</Column>
				<Column cols="3">
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</Column>
				<Column cols="4" maxWidth="7xl">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2">
					<VideoCard />
					<VideoCard />
				</Column>
				<Column cols="3">
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</Column>
				<Column cols="4" maxWidth="7xl">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</Column>
			</Container>
		</>
	);
}
