import StackedList from "../../_rds-final/layouts/StackedList/StackedList";
import PeopleItem from "../../_rds-final/components/ListingItem/PeopleItem/PeopleItem";

const people = [
	{
		name: "Carleton Banks",
		link: "https://carleton.ca",
		email: "carlton.banks@freshprince.com",
		jobTitle: "Manager at Peacock Stop",
		image: "/photos/carlton-banks-square.jpg",
	},
	{
		name: "William Smith",
		link: "https://carleton.ca",
		email: "william.smith@freshprince.com",
		jobTitle: "Waiter, Pirate-themed restaurant",
		image: "/photos/will-smith-square.jpg",
	},
];

export default function PeopleListing() {
	console.log(people);

	return (
		<StackedList dividers>
			{people.map(({ name, link, email, jobTitle, image }, index) => (
				<>
					<PeopleItem key={index}>
						<PeopleItem.Image image={image} />
						<PeopleItem.Content>
							<PeopleItem.Title name={name} link={link} />
							<PeopleItem.JobTitle jobTitle={jobTitle} />
							{/* <PeopleItem.Details email={email} /> */}
						</PeopleItem.Content>
					</PeopleItem>
				</>
			))}
		</StackedList>
	);
}
