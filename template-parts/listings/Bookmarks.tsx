import StackedList from "../../build-files/components/StackedList/StackedList";
import BookmarkItem from "../../build-files/components/ListingItem/BookmarkItem/BookmarkItem";

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
