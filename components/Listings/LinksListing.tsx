import StackedList from "../../_rds-final/components/StackedList/StackedList";
import LinkItem from "../../_rds-final/components/ListingItem/LinkItem/LinkItem";

const links = [
	{
		title: "Carleton 360",
		link: "#",
	},
	{
		title: "Carleton Central",
		link: "#",
	},
	{
		title: "Events Calendar and add stuff that makes it a long title",
		link: "#",
	},
	{
		title: "Travel & Expenses",
		link: "#",
	},
	{
		title: "Brightspace",
		link: "#",
	},
	{
		title: "eShop",
		link: "#",
	},
];

export default function LinksListing() {
	return (
		<StackedList.Dividers>
			{links.map(({ title, link }) => (
				<LinkItem key={title}>
					<LinkItem.Title title={title} link={link} />
				</LinkItem>
			))}
		</StackedList.Dividers>
	);
}
