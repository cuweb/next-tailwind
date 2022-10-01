import Column from "../../_rds-final/layouts/Columns/Columns";
import EventCard from "../Card/EventCard";

const featured = [
	{
		name: "Lived Experience Luncheon Series with Dr. Alex Auerbach",
		link: "#",
		register: "#",
		month: "Sept",
		day: "14",
		description:
			"Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
	},
	{
		name: "Science Student Alumni Mixer 2022",
		link: "#",
		register: "#",
		month: "Sept",
		day: "19",
		description:
			"Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
	},
	{
		name: "Milestone Anniversary Celebration 2022",
		link: "#",
		register: "#",
		month: "Sept",
		day: "23",
		description:
			"Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
	},
];

export default function AltFeaturedListing() {
	return (
		<section className="relative z-10 mb-8 -mt-32">
			<Column cols="3">
				{featured.map(
					({ name, link, register, month, day, description }) => (
						<EventCard
							key={name}
							name={name}
							link={link}
							register={register}
							month={month}
							day={day}
							description={description}
						/>
					)
				)}
			</Column>
		</section>
	);
}
