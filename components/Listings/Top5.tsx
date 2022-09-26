import StackedList from "../../_rds-final/components/StackedList/StackedList";
import NewsItem from "../../_rds-final/components/ListingItem/NewsItem/NewsItem";

const posts = [
	{
		id: 1,
		name: "Lived Experience Luncheon Series",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		id: 2,
		name: "Science Student Alumni Mixer 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		id: 3,
		name: "Milestone Anniversary Celebration 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Virtual Career Fairs",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "80 Years of Carleton University",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		date: "January 7, 2020",
		link: "#",
		image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
];

export default function Top5() {
	return (
		<>
			<StackedList>
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
			</StackedList>
		</>
	);
}
