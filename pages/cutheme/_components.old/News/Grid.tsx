import { Column } from "rds-tailwind";
import NewsCard from "./NewsCard";
import NewsCardDateAfter from "./NewsCardDateAfter";

export default function CardGridNews() {
	return (
		<>
			<h2>Date on top, 2 column</h2>

			<Column cols="2">
				<NewsCard />
				<NewsCard />
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
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Date on bottom, 2 column</h2>

			<Column cols="2">
				<NewsCardDateAfter />
				<NewsCardDateAfter />
			</Column>

			<p>
				Purus morbi dignissim senectus mattis adipiscing. Amet, massa
				quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
				sodales cursus tristique. Tincidunt sed tempus ut viverra
				ridiculus non molestie. Gravida quis fringilla amet eget dui
				tempor dignissim. Facilisis auctor venenatis varius nunc, congue
				erat ac. Cras fermentum convallis quam.
			</p>

			<h2>Date on bottom, 3 column</h2>

			<Column cols="3">
				<NewsCardDateAfter />
				<NewsCardDateAfter />
				<NewsCardDateAfter />
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
