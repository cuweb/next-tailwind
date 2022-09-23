import StackedList from "../../build-files/components/StackedLists/StackedList";
import FileItem from "../../build-files/components/ListingItems/FileItem/FileItem";

export default function Files() {
	return (
		<StackedList>
			{/* Add map for new listing using FileItem */}
			<FileItem />
			<FileItem />
			<FileItem />
		</StackedList>
	);
}
