import StackedList from "../../_rds-final/layouts/StackedList/StackedList";
import PeopleItem from "../../_rds-final/components/ListingItem/PeopleItem/PeopleItem";

const people = [
	{
		id: 1,
		name: "Carlton Banks",
		link: "https://carleton.ca",
		email: "carlton.banks@freshprince.com",
		jobTitle: "Manager at Peacock Stop",
		image: "/photos/carlton-banks-square.jpg",
	},
	{
		id: 2,
		name: "William Smith",
		link: "https://carleton.ca",
		email: "william.smith@freshprince.com",
		jobTitle: "Waiter, Pirate-themed restaurant",
		image: "/photos/will-smith-square.jpg",
	},
	{
		id: 3,
		name: "Philip Banks",
		link: "https://carleton.ca",
		email: "philip.banks@freshprince.com",
		jobTitle: "Judge, Lawyer and Activist",
		image: "/photos/philip-banks-square.jpg",
	},
	{
		id: 4,
		name: "Vivian Banks",
		link: "https://carleton.ca",
		email: "vivian.banks@freshprince.com",
		jobTitle: "University Professor",
		image: "/photos/vivian-banks-square.jpg",
	},
	{
		id: 5,
		name: "Hillary Banks",
		link: "https://carleton.ca",
		email: "hillary.banks@freshprince.com",
		jobTitle: "Talk Show Host",
		image: "/photos/hillary-banks-square.jpg",
	},
	{
		id: 6,
		name: "Geoffrey Butler",
		link: "https://carleton.ca",
		email: "geoffrey.butler@freshprince.com",
		jobTitle: "Butler (and former Olympic Runner)",
		image: "/photos/geoffrey-butler-square.jpg",
	},
];

export default function PeopleListing() {
	console.log(people);

	return (
		<StackedList dividers>
			{people.map(({ id, name, link, email, jobTitle, image }) => (
				<PeopleItem key={id}>
					<PeopleItem.Image image={image} />
					<PeopleItem.Content>
						<PeopleItem.Title name={name} link={link} />
						<PeopleItem.JobTitle jobTitle={jobTitle} />
						{/* <PeopleItem.Details email={email} /> */}
					</PeopleItem.Content>
				</PeopleItem>
			))}
		</StackedList>
	);
}
