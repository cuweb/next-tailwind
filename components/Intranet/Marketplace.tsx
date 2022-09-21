/* This example requires Tailwind CSS v2.0+ */
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import StackedList from "../../build-files/components/StackedLists/StackedList";
import MarketplaceItem from "../../build-files/components/ListingItems/MarketplaceItem";

export default function Marketplace() {
	return (
		<DashboardPanel title="Marketplace">
			<StackedList>
				{/* Add map for new listing using MarketplaceItem */}
				<MarketplaceItem />
				<MarketplaceItem />
				<MarketplaceItem />
			</StackedList>
		</DashboardPanel>
	);
}
