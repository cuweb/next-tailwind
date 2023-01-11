import { Column } from "rds-tailwind";
import NumberCard from "./NumberCard";
import NumberCardCenter from "./NumberCardCenter";

export default function CardGridNumber() {
	return (
		<>
			<h3>Left aligned, 2 column</h3>

			<Column cols="2">
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</Column>

			<h3>Left aligned, 3 column</h3>

			<Column cols="3">
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</Column>

			<h3>Centre aligned, 2 column</h3>

			<Column cols="2">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</Column>

			<h3>Centre aligned, 3 column</h3>

			<Column cols="3">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</Column>
		</>
	);
}
