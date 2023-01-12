import { Column } from "rds-tailwind";
import PeopleCard from "./PeopleCard";

export default function CardGridPeople() {
	return (
		<>
			<h2>Date on top, 2 column</h2>

			<Column cols="2">
				<PeopleCard />
				<PeopleCard />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Date on top, 3 column</h2>

			<Column cols="3">
				<PeopleCard />
				<PeopleCard />
				<PeopleCard />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>
		</>
	);
}
