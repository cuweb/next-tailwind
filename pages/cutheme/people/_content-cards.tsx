import { Column, Container } from "rds-tailwind";
import PeopleCard from "../_components/People/PeopleCard";

export default function PeopleCardContent() {
	return (
		<>
			<Container>
				<Column cols="2">
					<PeopleCard />
					<PeopleCard />
				</Column>
			</Container>
			<Container>
				<Column cols="3">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>
			</Container>
			<Container>
				<Column cols="4" maxWidth="7xl">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2">
					<PeopleCard />
					<PeopleCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="3">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="4" maxWidth="7xl">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>
			</Container>
		</>
	);
}
