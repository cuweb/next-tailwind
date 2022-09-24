import StackedList from "../../build-files/components/StackedList/StackedList";
import JobItem from "../../build-files/components/ListingItem/JobItem/JobItem";

const positions = [
	{
		id: 1,
		title: "Back End Developer",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 2,
		title: "Front End Developer",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 3,
		title: "User Interface Designer",
		type: "Student Services",
		location: "Remote",
		department: "Design",
		closeDate: "2020-01-14",
		closeDateFull: "January 14, 2020",
	},
	{
		id: 4,
		title: "Back End Developer",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 5,
		title: "Front End Developer",
		type: "Student Services",
		location: "Remote",
		department: "Engineering",
		closeDate: "2020-01-07",
		closeDateFull: "January 7, 2020",
	},
	{
		id: 6,
		title: "User Interface Designer",
		type: "Student Services",
		location: "Remote",
		department: "Design",
		closeDate: "2020-01-14",
		closeDateFull: "January 14, 2020",
	},
];

export default function JobListing() {
	return (
		<>
			<StackedList>
				{positions.map(
					({
						id,
						title,
						type,
						location,
						department,
						closeDate,
						closeDateFull,
					}) => (
						<JobItem
							key={id}
							title={title}
							type={type}
							location={location}
							department={department}
							closeDate={closeDate}
							closeDateFull={closeDateFull}
						/>
					)
				)}
			</StackedList>
		</>
	);
}
