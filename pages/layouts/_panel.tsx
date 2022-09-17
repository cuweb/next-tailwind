/* This example requires Tailwind CSS v2.0+ */
const announcements = [
	{
		id: 1,
		title: "Office closed on July 2nd",
		category: "Human Resources",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 2,
		title: "New password policy",
		category: "Healthy Workplace",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 3,
		title: "Office closed on July 2nd",
		category: "Potato",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
];

export default function PagePanel() {
	return <section className="p-4 bg-white cu-panel">Panel</section>;
}
