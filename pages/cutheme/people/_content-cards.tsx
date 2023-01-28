import { Column, Container } from "rds-tailwind";
import PeopleCard from "../_components/People/PeopleCard";
import PeopleCardShadow from "../_components/People/PeopleCard.Shadow";
import PeopleCardSquare from "../_components/People/PeopleCard.Square";

export default function PeopleCardContent() {
	return (
		<>
			<Container>
				<Column cols="2">
					<PeopleCard />
					<PeopleCard />
				</Column>

				<Column cols="3">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>

				<Column cols="4" maxWidth="7xl">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>

				<Column cols="2">
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>

				<Column cols="3">
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>

				<Column cols="4" maxWidth="7xl">
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>

				<Column cols="2">
					<PeopleCardSquare />
					<PeopleCardSquare />
				</Column>

				<Column cols="3">
					<PeopleCardSquare />
					<PeopleCardSquare />
					<PeopleCardSquare />
				</Column>

				<Column cols="4" maxWidth="7xl">
					<PeopleCardSquare />
					<PeopleCardSquare />
					<PeopleCardSquare />
					<PeopleCardSquare />
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2">
					<PeopleCard />
					<PeopleCard />
				</Column>

				<Column cols="3">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>

				<Column cols="4" maxWidth="7xl">
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
					<PeopleCard />
				</Column>

				<Column cols="2">
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>

				<Column cols="3">
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>

				<Column cols="4" maxWidth="7xl">
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>

				<Column cols="2">
					<PeopleCardSquare />
					<PeopleCardSquare />
				</Column>

				<Column cols="3">
					<PeopleCardSquare />
					<PeopleCardSquare />
					<PeopleCardSquare />
				</Column>

				<Column cols="4" maxWidth="7xl">
					<PeopleCardSquare />
					<PeopleCardSquare />
					<PeopleCardSquare />
					<PeopleCardSquare />
				</Column>
			</Container>
		</>
	);
}
