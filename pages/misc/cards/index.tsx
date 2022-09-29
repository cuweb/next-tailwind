import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import GridSubNav from "./_GridSubnav";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Web Services Prototypes</BaseBanner>

			<Container.White>
				<Column>
					<GridSubNav />
				</Column>
				<Column.Four>
					<div>Card1</div>
					<div>Card2</div>
					<div>Card3</div>
					<div>Card4</div>
				</Column.Four>
			</Container.White>

			<FooterBasic />
		</>
	);
};

export default Home;
