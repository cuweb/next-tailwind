import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Panel from "../../_rds-final/layouts/Panel/Panel";
import Banner from "../../_rds-final/components/Banner/Banner/Banner";
import EventFilter from "../../_rds-final/components/Filter/Filter";
import SmallCalendar from "../../_rds-final/components/Calendar/SmallCalendar/SmallCalendar";
import EventListing from "../../components/Listings/EventListing";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Banner hasGradient>
				<Banner.Title title="Monthly Events" />
			</Banner>

			<main className="pb-4">
				<Container>
					<Column>
						<EventFilter />
					</Column>
					<Column cols="2/3">
						<Panel hasBorder>
							<EventListing />
						</Panel>
						<div className="hidden md:block">
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
