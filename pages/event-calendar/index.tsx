import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer/FooterStandard";
import Navbar from "../../components/EventCalendar/Navbar";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import Panel from "../../build-files/layouts/Panel/Panel";
import PageBanner from "../../build-files/components/Banners/Page";

import EventCard from "../../build-files/components/Cards/EventCard";
import EventFilter from "../../build-files/components/Filter/Filter";
import EventList from "../../components/Intranet/Events";

import EventDatePicker from "../../components/EventCalendar/EventDatePicker";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<PageBanner>Events Calendar</PageBanner>

			<main>
				<Container.Gray>
					<Column.Three>
						<EventCard />
						<EventCard />
						<EventCard />
					</Column.Three>
				</Container.Gray>

				<Container.White>
					<Column.One>
						<div className="">
							<h2 className="text-4xl font-semibold tracking-tight text-cu-black-800">
								Upcoming Events
							</h2>
						</div>
						<EventFilter />
					</Column.One>
					<Column.TwoThird>
						<Panel className="bg-white border rounded-lg shadow border-cu-black-50">
							<EventList />
						</Panel>
						<EventDatePicker />
					</Column.TwoThird>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
