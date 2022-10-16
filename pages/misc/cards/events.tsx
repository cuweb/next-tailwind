import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import BaseBanner from "../../../_rds-final/components/Banner/Banner/Banner";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import GridSubNav from "./_GridSubnav";
import EventGrid from "../../../components/CardGrids/EventGrid";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Web Services Prototypes</BaseBanner>

			<Container>
				<Column>
					<GridSubNav />
				</Column>
				<Column cols="4">
					<EventGrid />
				</Column>
				<Column cols="3">
					<EventGrid />
				</Column>
				<Column cols="2">
					<EventGrid />
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
