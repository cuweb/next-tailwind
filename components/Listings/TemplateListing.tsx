import StackedList from "../../_rds-final/components/StackedList/StackedList";
import TemplateItem from "../../_rds-final/components/ListingItem/_TemplateItem/TemplateItem";

const template = [
	{
		name: "Lived Experience Luncheon Series",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		name: "Science Student Alumni Mixer 2022",
		excerpt:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
		date: "January 7, 2020",
		link: "#",
		image: "https://source.unsplash.com/random/400x300",
	},
	{
		name: "Milestone Anniversary Celebration 2022",
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
				{template.map(({ name, date, excerpt, link, image }) => (
					<TemplateItem
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
