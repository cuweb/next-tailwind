import { Column, Container } from "rds-tailwind";
import EventCard from "../_components/Events/EventCard";

export default function EventCardContent() {
	return (
		<>
			<Container>
				<Column cols="2">
					<EventCard />
					<EventCard />
				</Column>
			</Container>
			<Container>
				<Column cols="3">
					<EventCard />
					<EventCard />
					<EventCard />
				</Column>
			</Container>
			<Container>
				<Column cols="4" maxWidth="7xl">
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2">
					<EventCard />
					<EventCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="3">
					<EventCard />
					<EventCard />
					<EventCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="4" maxWidth="7xl">
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
				</Column>
			</Container>
		</>
	);
}
