import { Column, Container } from "rds-tailwind";
import NumberCardCenter from "../_components/Numbers/NumberCardCenter";
import NumberCard from "../_components/Numbers/NumbersCard";

export default function NumbersCardContent() {
	return (
		<>
			<Container>
				<Column cols="2">
					<NumberCard />
					<NumberCard />
				</Column>
			</Container>
			<Container>
				<Column cols="2">
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
			</Container>
			<Container>
				<Column cols="3">
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
			</Container>
			<Container>
				<Column cols="3">
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
			</Container>
			<Container>
				<Column cols="4" maxWidth="7xl">
					<NumberCard />
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
			</Container>
			<Container>
				<Column cols="4" maxWidth="7xl">
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2">
					<NumberCard />
					<NumberCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="2">
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="3">
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="3">
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="4" maxWidth="7xl">
					<NumberCard />
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="4" maxWidth="7xl">
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
			</Container>
		</>
	);
}
