import { Column } from "rds-tailwind";
import EventCard from "./EventCard";

export default function CardGridEvents() {
	return (
		<>
			<h3>3 column layout</h3>

			<Column cols="3">
				<EventCard />
				<EventCard />
				<EventCard />
			</Column>

			<h3>2 column layout</h3>

			<Column cols="2">
				<EventCard />
				<EventCard />
			</Column>
		</>
	);
}
