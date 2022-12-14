import StackedList from "../../_rds-final/layouts/StackedList/StackedList";
import JobItem from "../../_rds-final/components/ListingItem/JobItem/JobItem";

const positions = [
	{
		id: 1,
		title: "Back End Developer",
		link: "#",
		department: "Engineering",
		date: "January 7, 2020",
		dateData: "2020-01-07",
	},
	{
		id: 2,
		title: "Front End Developer",
		link: "#",
		department: "Engineering",
		date: "January 7, 2020",
		dateData: "2020-01-07",
	},
	{
		id: 3,
		title: "User Interface Designer",
		link: "#",
		department: "Design",
		date: "January 14, 2020",
		dateData: "2020-01-14",
	},
	{
		id: 4,
		title: "Back End Developer",
		link: "#",
		department: "Engineering",
		date: "January 7, 2020",
		dateData: "2020-01-07",
	},
	{
		id: 5,
		title: "Front End Developer",
		link: "#",
		department: "Engineering",
		date: "January 7, 2020",
		dateData: "2020-01-07",
	},
];

export default function JobListing() {
	return (
		<StackedList dividers>
			{positions.map(
				({ id, title, link, department, dateData, date }) => (
					<JobItem key={id}>
						<JobItem.Content>
							<JobItem.Title
								title={title}
								link={link}
								department={department}
							/>
							<JobItem.Details dateData={dateData} date={date} />
						</JobItem.Content>
					</JobItem>
				)
			)}
		</StackedList>
	);
}
