import type { NextPage } from "next";
import Head from "next/head";

import FooterBasic from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Banner from "../../_rds-final/components/Banner/Banner/Banner";
import SubmitForm from "../../_rds-final/components/SubmitForm/SubmitForm";
import Column from "../../_rds-final/layouts/Columns/Columns";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Banner bgType="gradient" hasSpacing="base">
				<Banner.Title title="Submit Event" />
			</Banner>

			<Container>
				<Column>
					<SubmitForm />
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default EventCalendar;
