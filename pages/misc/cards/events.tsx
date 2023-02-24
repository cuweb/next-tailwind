import type { NextPage } from "next";
import Head from "next/head";
import { Container, Column, TopNav, Banner, FooterBasic } from "rds-tailwind";
import GridSubNav from "./_GridSubnav";

// OLD SCHOOL RDS
import EventGrid from "../../../components/CardGrids/EventGrid";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="CU Prototypes" />

			<Banner
				align="left"
				isType="dark-wave"
				title="Event Card Examples"
			/>

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
