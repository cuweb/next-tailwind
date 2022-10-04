import StackedList from "../../_rds-final/layouts/StackedList/StackedList";
import LinkItem from "../../_rds-final/components/ListingItem/LinkItem/LinkItem";
import Link from "next/link";

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
		<StackedList dividers>
			{links.map(({ title, link }) => (
				<LinkItem key={title}>
					<LinkItem.Content>
						<LinkItem.Title title={title} link={link} />
					</LinkItem.Content>
				</LinkItem>
			))}
		</StackedList>
	);
}
