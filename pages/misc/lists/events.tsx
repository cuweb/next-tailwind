import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/CuTheme";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import EventListing from "../../../components/Listings/EventListing";
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

			<Container.White>
				<Column>
					<ListSubNav />
				</Column>
				<Column>
					<div className="border rounded-lg border-cu-black-100">
						<EventListing />
					</div>
				</Column>
				<Column.Two>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<EventListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<EventListing />
						</div>
					</div>
				</Column.Two>
				<Column.TwoThird>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<EventListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<EventListing />
						</div>
					</div>
				</Column.TwoThird>
			</Container.White>

			<FooterBasic />
		</>
	);
};

export default Home;
