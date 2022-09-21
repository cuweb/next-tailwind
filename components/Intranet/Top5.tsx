/* This example requires Tailwind CSS v2.0+ */
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import StackedList from "../../build-files/components/StackedLists/StackedList";
import NewsItem from "../../build-files/components/ListingItems/NewsItem/NewsItem";

export default function Top5() {
	return (
		<DashboardPanel title="Top 5">
			<StackedList>
				{/* Add map for new listing using NewsItem */}
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</StackedList>
		</DashboardPanel>
	);
}
