import StackedList from "../../build-files/components/StackedLists/StackedList";
import NewsItem from "../../build-files/components/ListingItems/NewsItem/NewsItem";

export default function Top5() {
	return (
		<StackedList>
			{/* Add map for new listing using MarketplaceItem */}
			<NewsItem.List />
		</StackedList>
	);
}
