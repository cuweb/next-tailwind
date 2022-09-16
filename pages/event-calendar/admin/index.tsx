import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../../../components/Featured/Featured";
import Footer from "../../../components/Footer/FooterStandard";
import FooterStandard from "../../../components/Footer/FooterStandard";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import Spotlight from "../../../components/Spotlight/Spotlight";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Header />
			<Spotlight />
			<Featured />
			<Footer />
			<br />
			<br />
			<FooterStandard />
		</>
	);
};

export default EventCalendar;
