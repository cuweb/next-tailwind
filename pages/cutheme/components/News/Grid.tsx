import { Column } from "rds-tailwind";
import NewsCard from "./NewsCard";
import NewsCardDateAfter from "./NewsCardDateAfter";

export default function CardGridNews() {
	return (
		<>
			<h3>Date on top, 2 column</h3>

			<Column cols="2">
				<NewsCard />
				<NewsCard />
			</Column>

			<h3>Date on top, 3 column</h3>

			<Column cols="3">
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Column>

			<h3>Date on bottom, 2 column</h3>

			<Column cols="2">
				<NewsCardDateAfter />
				<NewsCardDateAfter />
			</Column>

			<h3>Date on bottom, 3 column</h3>

			<Column cols="3">
				<NewsCardDateAfter />
				<NewsCardDateAfter />
				<NewsCardDateAfter />
			</Column>
		</>
	);
}
