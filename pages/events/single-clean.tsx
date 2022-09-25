import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../build-files/components/Navbar/EventNavbar";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<main>
				<p>Single</p>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
