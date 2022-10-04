import StackedList from "../../_rds-final/components/StackedList/StackedList";
import FileItem from "../../_rds-final/components/ListingItem/FileItem/FileItem";
import FeedItem from "../../_rds-final/components/ListingItem/FeedItem/FeedItem";

const files = [
	{
		title: "Monthly Leave Report",
		link: "#",
		filesize: "175KB",
		date: "January 7, 2020",
	},
	// {
	// 	title: "Dental Claim Form",
	// 	link: "#",
	// 	filesize: "175KB",
	// 	date: "January 7, 2020",
	// },
	// {
	// 	title: "Healthcare Expenses Statement",
	// 	link: "#",
	// 	filesize: "175KB",
	// 	date: "January 7, 2020",
	// },
	// {
	// 	title: "CUPE 3778 Collective Agreement",
	// 	link: "#",
	// 	filesize: "175KB",
	// 	date: "January 7, 2020",
	// },
	// {
	// 	title: "Accident Report",
	// 	link: "#",
	// 	filesize: "175KB",
	// 	date: "January 7, 2020",
	// },
];

export default function FileListing() {
	return (
		<StackedList.Dividers>
			{files.map(({ title, filesize, link, date }) => (
				<>
					<FileItem key={title}>
						<FileItem.Title title={title} link={link} />
						<FileItem.Details filesize={filesize} date={date} />
					</FileItem>
					<FileItem key={title}>
						<FileItem.Details filesize={filesize} date={date} />
						<FileItem.Title title={title} link={link} />
					</FileItem>
				</>
			))}
		</StackedList.Dividers>
	);
}
