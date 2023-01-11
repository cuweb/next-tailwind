import { Column } from "rds-tailwind";
import NumberCard from "./NumberCard";
import NumberCardCenter from "./NumberCardCenter";

export default function CardGridNumber() {
	return (
		<>
			<h2>Left aligned, 2 column</h2>

			<Column cols="2">
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Left aligned, 3 column</h2>

			<Column cols="3">
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Centre aligned, 2 column</h2>

			<Column cols="2">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Centre aligned, 3 column</h2>

			<Column cols="3">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
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
