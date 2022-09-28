import StackedList from "../../_rds-final/components/StackedList/StackedList";
import MarketplaceItem from "../../_rds-final/components/ListingItem/MarketplaceItem/MarketplaceItem";

const marketplace = [
	{
		name: "Nintendo 64",
		link: "#",
		cost: "$100.00",
		image: "https://source.unsplash.com/random/400x400",
	},
	{
		name: "Plastic Boxes",
		link: "#",
		cost: "$40.00",
		image: "https://source.unsplash.com/random/400x400",
	},
	{
		name: "Cambridge Audio Stereo Amplifier",
		link: "#",
		cost: "$10000.00",
		image: "https://source.unsplash.com/random/400x400",
	},
	{
		name: "IKEA Baskets",
		link: "#",
		cost: "$90.00",
		image: "https://source.unsplash.com/random/400x400",
	},
	{
		name: "Hair Collection",
		link: "#",
		cost: "$100.00",
		image: "https://source.unsplash.com/random/400x400",
	},
];

export default function Marketplace() {
	return (
		<StackedList.Dividers>
			{marketplace.map(({ name, link, cost, image }) => (
				<MarketplaceItem
					key={name}
					name={name}
					link={link}
					cost={cost}
					image={image}
				/>
			))}
		</StackedList.Dividers>
	);
}
