import StackedList from "../../_rds-final/components/StackedList/StackedList";
import FileItem from "../../_rds-final/components/ListingItem/FileItem/FileItem";

const files = [
	{
		name: "Monthly Leave Report",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		name: "Dental Claim Form",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		name: "Healthcare Expenses Statement",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		name: "CUPE 3778 Collective Agreement",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		name: "Accident Report",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
];

export default function FileListing() {
	return (
		<StackedList.Dividers>
			{files.map(({ name, filesize, link, date }) => (
				<FileItem
					key={name}
					name={name}
					filesize={filesize}
					link={link}
					date={date}
				/>
			))}
		</StackedList.Dividers>
	);
}
