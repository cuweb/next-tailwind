import StackedList from "../../_rds-final/components/StackedList/StackedList";
import LinkItem from "../../_rds-final/components/ListingItem/LinkItem/LinkItem";

const links = [
	{
		name: "Carleton 360",
		link: "#",
		preview: "175KB  ",
		handle: "10-05-2022",
		location: "405 Robertson Hall",
		dateFull: "January 7, 2020",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Carleton Central",
		preview: "175KB  ",
		handle: "10-05-2022",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Events Calendar",
		preview: "175KB  ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Travel & Expenses",
		preview: "175KB  ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Brightspace",
		preview: "175KB  ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "eShop",
		preview: "175KB  ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
];

export default function LinksListing() {
	return (
		<StackedList>
			{links.map(
				({
					name,
					preview,
					handle,
					dateFull,
					link,
					location,
					time,
					imageUrl,
				}) => (
					<LinkItem
						key={name}
						name={name}
						preview={preview}
						handle={handle}
						dateFull={dateFull}
						link={link}
						location={location}
						time={time}
						imageUrl={imageUrl}
					/>
				)
			)}
		</StackedList>
	);
}
