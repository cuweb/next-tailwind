import StackedList from "../../_rds-final/components/StackedList/StackedList";
import LinkItem from "../../_rds-final/components/ListingItem/LinkItem/LinkItem";

const links = [
	{
		name: "Carleton 360",
		link: "#",
	},
	{
		name: "Carleton Central",
		link: "#",
	},
	{
		name: "Events Calendar",
		link: "#",
	},
	{
		name: "Travel & Expenses",
		link: "#",
	},
	{
		name: "Brightspace",
		link: "#",
	},
	{
		name: "eShop",
		link: "#",
	},
];

export default function LinksListing() {
	return (
		<StackedList.Dividers>
			{links.map(({ name, link }) => (
				<LinkItem key={name} name={name} link={link} />
			))}
		</StackedList.Dividers>
	);
}
