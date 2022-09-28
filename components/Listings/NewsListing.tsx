import StackedList from "../../_rds-final/components/StackedList/StackedList";
import NewsItem from "../../_rds-final/components/ListingItem/NewsItem/NewsItem";

const posts = [
	{
		name: "Lived Experience Luncheon Series",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		name: "Science Student Alumni Mixer 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		name: "Milestone Anniversary Celebration 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		name: "Virtual Career Fairs",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		name: "80 Years of Carleton University",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
];

export default function NewsListing() {
	return (
		<>
			<StackedList.Dividers>
				{posts.map(({ name, date, excerpt, link, image }) => (
					<NewsItem
						key={name}
						name={name}
						date={date}
						excerpt={excerpt}
						link={link}
						image={image}
					/>
				))}
			</StackedList.Dividers>
		</>
	);
}
