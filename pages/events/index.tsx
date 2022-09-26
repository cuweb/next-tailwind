import type { NextPage } from "next";
import Head from "next/head";

// import Footer from "../../build-files/components/Footer/FooterIntranet/FooterIntranet";
import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Panel from "../../_rds-final/layouts/Panel/Panel";
import EventFilter from "../../_rds-final/components/Filter/Filter";
import SmallCalendar from "../../_rds-final/components/Calendar/SmallCalendar/SmallCalendar";

import AlternateFeaturedHeader from "../../components/Banner/Alt_FeaturedBanner";
import AltFeaturedListing from "../../components/Listings/Alt_FeaturedListing";

import EventListing from "../../components/Listings/EventListing";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Container.Empty>
				<AlternateFeaturedHeader />
				<AltFeaturedListing />
			</Container.Empty>

			<main className="pb-4">
				<Container.White>
					<Column.One>
						<h2 className="text-2xl font-semibold text-cu-black-800 md:text-4xl">
							Upcoming Events
						</h2>
						<EventFilter />
					</Column.One>
					<Column.TwoThird>
						<Panel>
							<EventListing />
						</Panel>
						<SmallCalendar />
					</Column.TwoThird>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
