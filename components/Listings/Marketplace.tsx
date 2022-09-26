import StackedList from "../../_rds-final/components/StackedList/StackedList";
import MarketplaceItem from "../../_rds-final/components/ListingItem/MarketplaceItem/MarketplaceItem";

const marketplace = [
	{
		name: "Nintendo 64",
		link: "#",
		handle: "10-05-2022",
		location: "405 Robertson Hall",
		dateFull: "January 7, 2020",
		time: "$100.00",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Plastic Boxes",
		handle: "10-05-2022",
		link: "#",
		location: "405 Robertson Hall",
		time: "$40.00",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Cambridge Audio Stereo Amplifier",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "$10000.00",
		imageUrl:
			"https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "IKEA Baskets",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "$90.00",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Hair Collection",
		handle: "10-05-2022",
		link: "#",
		location: "405 Robertson Hall",
		time: "$100.00",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
];

export default function Marketplace() {
	return (
		<StackedList>
			{marketplace.map(
				({
					name,
					handle,
					link,
					location,
					time,
					dateFull,
					imageUrl,
				}) => (
					<MarketplaceItem
						key={name}
						name={name}
						handle={handle}
						link={link}
						location={location}
						time={time}
						dateFull={dateFull}
						imageUrl={imageUrl}
					/>
				)
			)}
		</StackedList>
	);
}
