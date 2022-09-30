import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import LinksListing from "../../../components/Listings/LinksListing";
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
					<div className="rounded-lg border border-cu-black-100">
						<LinksListing />
					</div>
				</Column>
				<Column.Two>
					<div>
						<div className="rounded-lg border border-cu-black-100">
							<LinksListing />
						</div>
					</div>
					<div>
						<div className="rounded-lg border border-cu-black-100">
							<LinksListing />
						</div>
					</div>
				</Column.Two>
				<Column.TwoThird>
					<div>
						<div className="rounded-lg border border-cu-black-100">
							<LinksListing />
						</div>
					</div>
					<div>
						<div className="rounded-lg border border-cu-black-100">
							<LinksListing />
						</div>
					</div>
				</Column.TwoThird>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
