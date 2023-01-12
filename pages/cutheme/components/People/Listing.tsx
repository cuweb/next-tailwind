import { Column } from "rds-tailwind";
import PeopleListItem from "./PeopleListItem";
import PeopleListItemContained from "./PeopleListItemContained";
export default function ListItemsPeople() {
	return (
		<>
			<h2>People Listing, no container</h2>

			<Column cols="2">
				<PeopleListItem />
				<PeopleListItem />
				<PeopleListItem />
				<PeopleListItem />
				<PeopleListItem />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Contained inside a card</h2>

			<Column cols="2">
				<PeopleListItemContained />
				<PeopleListItemContained />
				<PeopleListItemContained />
				<PeopleListItemContained />
				<PeopleListItemContained />
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
