/* This example requires Tailwind CSS v2.0+ */
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import StackedList from "../../build-files/components/StackedLists/StackedList";
import EventItem from "../../build-files/components/ListingItems/EventItem/EventItem";

export default function Events() {
	return (
		<DashboardPanel title="Upcoming Events">
			<StackedList>
				{/* Add map for new listing using NewsItem */}
				<EventItem />
				<EventItem />
				<EventItem />
			</StackedList>
		</DashboardPanel>
	);
}
