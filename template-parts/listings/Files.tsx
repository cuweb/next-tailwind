import StackedList from "../../build-files/components/StackedList/StackedList";
import FileItem from "../../build-files/components/ListingItem/FileItem/FileItem";

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
