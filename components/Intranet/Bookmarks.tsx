/* This example requires Tailwind CSS v2.0+ */
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import StackedList from "../../build-files/components/StackedLists/StackedList";
import BookmarkItem from "../../build-files/components/ListingItems/BookmarkItem/BookmarkItem";

export default function Bookmarks() {
	return (
		<DashboardPanel title="Bookmarks">
			<StackedList>
				{/* Add map for new listing using BookmarkItem */}
				<BookmarkItem />
				<BookmarkItem />
				<BookmarkItem />
			</StackedList>
		</DashboardPanel>
	);
}
