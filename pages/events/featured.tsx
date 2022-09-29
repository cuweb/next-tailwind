import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import EventBanner from "../../components/Banner/EventBanner";
import EventCard from "../../components/Card/EventCardImage";

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

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Container.Empty>
				<EventBanner>Featured Events</EventBanner>
			</Container.Empty>

			<main className="pb-4">
				<Container.White>
					<Column.Three>
						{featured.map(
							({
								name,
								link,
								register,
								month,
								day,
								description,
							}) => (
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
					</Column.Three>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
