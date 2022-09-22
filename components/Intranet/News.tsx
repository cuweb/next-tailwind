import StackedList from "../../build-files/components/StackedLists/StackedList";
import NewsItem from "../../build-files/components/ListingItems/NewsItem/NewsItem";
import Button from "../../build-files/components/Button/Button";
import Panel from "../../build-files/layouts/Panel/Panel";

const announcements = [
	{
		id: 1,
		title: "Office closed on July 2nd",
		link: "#",
		date: "September 3rd, 2023",
		category: "Human Resources",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 2,
		title: "New password policy",
		link: "#",
		date: "September 9th, 2023",
		category: "Healthy Workplace",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 3,
		title: "Office closed on July 2nd",
		link: "#",
		date: "September 15th, 2023",
		category: "Potato",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
];

export default function News() {
	return (
		<>
			<StackedList>
				{announcements.map(
					({ id, title, link, date, excerpt, category }) => (
						<NewsItem.List key={id}>
							<NewsItem.Title title={title} link={link} />
							<NewsItem.Date date={date} />
							<NewsItem.Excerpt excerpt={excerpt} />
							<NewsItem.Category category={category} />
						</NewsItem.List>
					)
				)}
			</StackedList>

			<Panel className="p-4">
				<Button.Red text="More News" link="#" />
			</Panel>
		</>
	);
}
