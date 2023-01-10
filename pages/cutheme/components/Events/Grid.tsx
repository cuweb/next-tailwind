import { Column } from "rds-tailwind";
import EventCard from "./EventCard";

export default function CardGridEvents() {
	return (
		<>
			<Column cols="3">
				<EventCard />
				<EventCard />
				<EventCard />
			</Column>

			<Column cols="2">
				<EventCard />
				<EventCard />
			</Column>
		</>
	);
}
