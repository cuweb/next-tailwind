import StackedList from "../../_rds-final/components/StackedList/StackedList";
import JobItem from "../../_rds-final/components/ListingItem/JobItem/JobItem";

const positions = [
	{
		id: 1,
		title: "Back End Developer",
		link: "#",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 2,
		title: "Front End Developer",
		link: "#",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 3,
		title: "User Interface Designer",
		link: "#",
		type: "Student Services",
		location: "Remote",
		department: "Design",
		closeDate: "2020-01-14",
		closeDateFull: "January 14, 2020",
	},
	{
		id: 4,
		title: "Back End Developer",
		link: "#",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 5,
		title: "Front End Developer",
		link: "#",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
];

export default function JobListing() {
	return (
		<>
			<StackedList.Dividers>
				{positions.map(
					({ id, title, link, type, closeDate, closeDateFull }) => (
						<JobItem
							key={id}
							title={title}
							link={link}
							type={type}
							closeDate={closeDate}
							closeDateFull={closeDateFull}
						/>
					)
				)}
			</StackedList.Dividers>
		</>
	);
}
