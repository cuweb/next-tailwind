import StackedList from "../../_rds-final/components/StackedList/StackedList";
import NewsItem from "../../_rds-final/components/ListingItem/NewsItem/NewsItem";

const posts = [
	{
		title: "Lived Experience Luncheon Series",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "Science Student Alumni Mixer 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "Milestone Anniversary Celebration 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "Virtual Career Fairs",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		title: "80 Years of Carleton University",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
];

export default function NewsListing() {
	return (
		<>
			<StackedList.Dividers>
				{posts.map(({ title, date, excerpt, link, image }) => (
					<NewsItem key={title}>
						<NewsItem.Image image={image} />
						<NewsItem.Title title={title} link={link}>
							<NewsItem.Date date={date} />
							<NewsItem.Excerpt excerpt={excerpt} />
						</NewsItem.Title>
					</NewsItem>
				))}
			</StackedList.Dividers>
		</>
	);
}
