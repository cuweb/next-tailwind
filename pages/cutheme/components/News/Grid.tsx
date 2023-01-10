import { Column } from "rds-tailwind";
import NewsCard from "./NewsCard";

export default function CardGridNews() {
	return (
		<>
			<Column cols="3">
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Column>

			<Column cols="2">
				<NewsCard />
				<NewsCard />
			</Column>
		</>
	);
}
