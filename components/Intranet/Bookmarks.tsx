import StackedList from "../../build-files/components/StackedLists/StackedList";
import BookmarkItem from "../../build-files/components/ListingItems/BookmarkItem/BookmarkItem";

export default function Bookmarks() {
	return (
		<StackedList>
			{/* Add map for new listing using BookmarkItem */}
			<BookmarkItem />
			<BookmarkItem />
			<BookmarkItem />
		</StackedList>
	);
}
