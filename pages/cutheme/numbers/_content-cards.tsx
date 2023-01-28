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
				<Column cols="2">
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
				<Column cols="3">
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
				<Column cols="3">
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
				<Column cols="4" maxWidth="7xl">
					<NumberCard />
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
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
				<Column cols="2">
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
				<Column cols="3">
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
				<Column cols="3">
					<NumberCardCenter />
					<NumberCardCenter />
					<NumberCardCenter />
				</Column>
				<Column cols="4" maxWidth="7xl">
					<NumberCard />
					<NumberCard />
					<NumberCard />
					<NumberCard />
				</Column>
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
