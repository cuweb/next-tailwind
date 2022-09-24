import StackedList from "../../build-files/components/StackedList/StackedList";
import MarketplaceItem from "../../build-files/components/ListingItem/MarketplaceItem/MarketplaceItem";

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
