import StackedList from "../../_rds-final/components/StackedList/StackedList";
import FileItem from "../../_rds-final/components/ListingItem/FileItem/FileItem";

const files = [
	{
		title: "Monthly Leave Report",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		title: "Dental Claim Form",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		title: "Healthcare Expenses Statement",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		title: "CUPE 3778 Collective Agreement",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	{
		title: "Accident Report",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
];

export default function FileListing() {
	return (
		<StackedList.Dividers>
			{files.map(({ title, filesize, link, date }) => (
				<FileItem
					key={title}
					title={title}
					filesize={filesize}
					link={link}
					date={date}
				/>
			))}
		</StackedList.Dividers>
	);
}
