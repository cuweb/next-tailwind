import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../build-files/components/Navbar/EventNavbar";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import BannerButtons from "../../build-files/components/Banner/BannerButtons/BannerButtons";
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";

import {
	MapPinIcon,
	PaperClipIcon,
	CalendarIcon,
	HeartIcon,
	ShareIcon,
} from "@heroicons/react/20/solid";

const attachments = [
	{ name: "resume_front_end_developer.pdf", href: "#" },
	{ name: "coverletter_front_end_developer.pdf", href: "#" },
];

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
