import { Column, Container } from "rds-tailwind";
import NewsCard from "../_components/News/NewsCard";

export default function NewsCardContent() {
	return (
		<>
			<Container>
				<Column cols="2">
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
			<Container>
				<Column cols="3">
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
			<Container>
				<Column cols="4" maxWidth="7xl">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2">
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="3">
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
			<Container bgColor="grey">
				<Column cols="4" maxWidth="7xl">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
		</>
	);
}
