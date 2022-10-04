import StackedList from "../../_rds-final/layouts/StackedList/StackedList";
import MarketplaceItem from "../../_rds-final/components/ListingItem/MarketplaceItem/MarketplaceItem";

const marketplace = [
	{
		title: "Nintendo 64",
		link: "#",
		cost: "$100.00",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "Plastic Boxes",
		link: "#",
		cost: "$40.00",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "Cambridge Audio Stereo Amplifier",
		link: "#",
		cost: "$10000.00",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "IKEA Baskets",
		link: "#",
		cost: "$90.00",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "Hair Collection",
		link: "#",
		cost: "$100.00",
		image: "https://source.unsplash.com/random/400x300",
	},
];

export default function MarketplaceListing() {
	return (
		<StackedList dividers>
			{marketplace.map(({ title, link, cost, image }) => (
				<MarketplaceItem key={title}>
					<MarketplaceItem.Image image={image} />
					<MarketplaceItem.Content>
						<MarketplaceItem.Title
							title={title}
							link={link}
							cost={cost}
						/>
						<MarketplaceItem.Category />
					</MarketplaceItem.Content>
				</MarketplaceItem>
			))}
		</StackedList>
	);
}
