import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import FeedListing from "../../../components/Listings/FeedListing";
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
						<FeedListing />
					</div>
				</Column>
				<Column cols="2">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<FeedListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<FeedListing />
						</div>
					</div>
				</Column>
				<Column>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<FeedListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<FeedListing />
						</div>
					</div>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
