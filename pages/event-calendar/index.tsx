import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/FooterStandard";
import Navbar from "../../components/EventCalendar/Navbar";
import FeaturedEvents from "../../components/EventCalendar/FeaturedEvents";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<FeaturedEvents />
			<Featured />
			<Footer />
		</>
	);
};

export default EventCalendar;
