import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Panel from "../../_rds-final/layouts/Panel/Panel";
import EventFilter from "../../_rds-final/components/Filter/Filter";
import SmallCalendar from "../../_rds-final/components/Calendar/SmallCalendar/SmallCalendar";

import Banner from "../../_rds-final/components/Banner/Banner/Banner";
import EventGrid from "../../components/CardGrids/EventGrid";
import EventListing from "../../components/Listings/EventListing";
import Container from "../../_rds-final/layouts/Container/Container";
import Pagination from "../../components/Pagination/Pagination";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Banner hasGradient hasSpacing="base">
				<Banner.Title title="Featured Events" />
			</Banner>

			<main className="pb-4 -mt-40 lg:-mt-44">
				<Container>
					<Column cols="3">
						<EventGrid />
					</Column>
				</Container>

				<Container>
					<Column>
						<h2 className="mt-8 mb-3 text-3xl font-medium text-cu-black-800 lg:text-4xl">
							Upcoming Events
						</h2>
						<EventFilter />
					</Column>
					<Column cols="2/3">
						<Panel hasBorder>
							<EventListing />
							<Pagination />
						</Panel>
						<div className="hidden md:ml-2 md:block">
							<SmallCalendar />
						</div>
					</Column>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
