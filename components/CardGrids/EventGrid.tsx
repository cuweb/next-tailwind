import EventCard from "../../_rds-final/components/Card/EventCard/EventCard";

const featured = [
	{
		id: 1,
		name: "Lived Experience Luncheon Series with Dr. Alex Auerbach",
		link: "/events/single",
		month: "Sept",
		day: "12",
		multi: "",
		time: "2:00pm — 5:00pm",
		location: "405 Robertson Hall",
	},
	{
		id: 2,
		name: "Science Student &amp; Alumni Mixer 2022",
		link: "/events/single",
		month: "Sept",
		day: "19",
		multi: "September 19 — 23",
		time: "8:30am — 11:00am",
		location: "Ravens Nest",
	},
	{
		id: 3,
		name: "Milestone Anniversary Celebration 2022",
		link: "/events/single",
		month: "Sept",
		day: "23",
		multi: "",
		time: "10:00am — 3:00pm",
		location: "Dunton Tower, 5th Floor",
	},
];

export default function EventGrid() {
	return (
		<>
			{featured.map(
				({ name, link, month, day, multi, time, location }) => (
					<EventCard
						key={name}
						name={name}
						link={link}
						month={month}
						day={day}
						multi={multi}
						time={time}
						location={location}
					/>
				)
			)}
		</>
	);
}
