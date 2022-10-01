import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import MarketplaceListing from "../../../components/Listings/MarketplaceListing";
import ListSubNav from "./_ListSubnav";

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
					<ListSubNav />
				</Column>
				<Column>
					<div className="border rounded-lg border-cu-black-100">
						<MarketplaceListing />
					</div>
				</Column>
				<Column cols="2">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<MarketplaceListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<MarketplaceListing />
						</div>
					</div>
				</Column>
				<Column cols="2/3">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<MarketplaceListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<MarketplaceListing />
						</div>
					</div>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
