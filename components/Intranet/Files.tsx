/* This example requires Tailwind CSS v2.0+ */
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import StackedList from "../../build-files/components/StackedLists/StackedList";
import FileItem from "../../build-files/components/ListingItems/FileItem";

export default function Files() {
	return (
		<DashboardPanel title="Files">
			<StackedList>
				{/* Add map for new listing using FileItem */}
				<FileItem />
				<FileItem />
				<FileItem />
			</StackedList>
		</DashboardPanel>
	);
}
