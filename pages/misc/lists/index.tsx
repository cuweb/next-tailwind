import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/CuTheme";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import EventListing from "../../../components/Listings/EventListing";
import NewsListing from "../../../components/Listings/NewsListing";
import FeedListing from "../../../components/Listings/FeedListing";
import Marketplace from "../../../components/Listings/MarketplaceListing";
import FileListing from "../../../components/Listings/FileListing";
import JobListing from "../../../components/Listings/JobListing";
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

			<Container.White>
				<Column>
					<ListSubNav />
				</Column>
				<Column.Two>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<NewsListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<EventListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<FeedListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<Marketplace />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<FileListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<JobListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<LinksListing />
						</div>
					</div>
				</Column.Two>
			</Container.White>

			<FooterBasic />
		</>
	);
};

export default Home;
