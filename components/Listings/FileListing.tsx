import StackedList from "../../_rds-final/components/StackedList/StackedList";
import FileItem from "../../_rds-final/components/ListingItem/FileItem/FileItem";

const files = [
	{
		name: "Monthly Leave Report",
		link: "#",
		preview: "175KB  ",
		handle: "10-05-2022",
		location: "405 Robertson Hall",
		dateFull: "January 7, 2020",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Dental Claim Form",
		preview: "175KB  ",
		handle: "10-05-2022",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Healthcare Expenses Statement",
		preview: "175KB  ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "CUPE 3778 Collective Agreement",
		preview: "175KB  ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Accident Report",
		preview: "175KB  ",
		handle: "10-05-2022",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
];

export default function FileListing() {
	return (
		<StackedList>
			{files.map(
				({
					name,
					preview,
					handle,
					link,
					location,
					time,
					dateFull,
					imageUrl,
				}) => (
					<FileItem
						key={name}
						name={name}
						preview={preview}
						handle={handle}
						link={link}
						location={location}
						time={time}
						dateFull={dateFull}
						imageUrl={imageUrl}
					/>
				)
			)}
		</StackedList>
	);
}
