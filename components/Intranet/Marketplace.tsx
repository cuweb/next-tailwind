import StackedList from "../../build-files/components/StackedLists/StackedList";
import MarketplaceItem from "../../build-files/components/ListingItems/MarketplaceItem/MarketplaceItem";

export default function Marketplace() {
	return (
		<StackedList>
			{/* Add map for new listing using MarketplaceItem */}
			<MarketplaceItem />
			<MarketplaceItem />
			<MarketplaceItem />
		</StackedList>
	);
}
