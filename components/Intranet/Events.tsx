import StackedList from "../../build-files/components/StackedLists/StackedList";
import EventItem from "../../build-files/components/ListingItems/EventItem/EventItem";

export default function Events() {
	return (
		<StackedList>
			{/* Add map for new listing using NewsItem */}
			<EventItem />
			<EventItem />
			<EventItem />
		</StackedList>
	);
}
