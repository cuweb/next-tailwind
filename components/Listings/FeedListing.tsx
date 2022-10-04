import StackedList from "../../_rds-final/components/StackedList/StackedList";
import FeedItem from "../../_rds-final/components/ListingItem/FeedItem/FeedItem";

const posts = [
	{
		id: 1,
		title: "Office closed on July 2nd",
		link: "https://carleton.ca",
		date: "September 3rd, 2023",
		category: "Human Resources",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 2,
		title: "New password policy",
		link: "https://carleton.ca",
		date: "September 9th, 2023",
		category: "Healthy Workplace",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 3,
		title: "Office closed on July 2nd",
		link: "https://carleton.ca",
		date: "September 15th, 2023",
		category: "Potato",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 2,
		title: "New password policy",
		link: "https://carleton.ca",
		date: "September 9th, 2023",
		category: "Healthy Workplace",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
];

export default function FeedListing() {
	return (
		<StackedList.Dividers>
			{posts.map(({ id, title, link, date, excerpt, category }) => (
				<FeedItem key={id}>
					<FeedItem.Title title={title} link={link} />
					<FeedItem.Date date={date} />
					<FeedItem.Excerpt excerpt={excerpt} />
					<FeedItem.Category category={category} />
				</FeedItem>
			))}
		</StackedList.Dividers>
	);
}
