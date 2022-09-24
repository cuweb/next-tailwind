import StackedList from "../../build-files/components/StackedList/StackedList";
import EventItem from "../../build-files/components/ListingItem/EventItem/EventItem";

const events = [
	{
		name: "Lived Experience Luncheon Series with Dr. Alex Auerbach",
		link: "#",
		handle: "10-05-2022",
		location: "405 Robertson Hall",
		dateFull: "January 7, 2020",
		time: "2:00 PM - 10:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Science Student Alumni Mixer 2022",
		handle: "10-05-2022",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM - 10:00 PM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Milestone Anniversary Celebration 2022",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM - 10:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Virtual Career Fairs",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		link: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM - 10:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Kegger",
		handle: "10-05-2022",
		link: "#",
		location: "Off Campus",
		time: "9:00 PM - 5:00 AM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

export default function EventListing() {
	return (
		<>
			<StackedList>
				{events.map(({ name, link, dateFull, time, location }) => (
					<EventItem
						key={name}
						name={name}
						date={dateFull}
						time={time}
						link={link}
						location={location}
					/>
				))}
			</StackedList>
		</>
	);
}
