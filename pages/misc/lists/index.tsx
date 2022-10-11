import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import Panel from "../../../_rds-final/layouts/Panel/Panel";
import ListSubNav from "./_ListSubnav";
import EventListing from "../../../components/Listings/EventListing";
import NewsListing from "../../../components/Listings/NewsListing";
import FeedListing from "../../../components/Listings/FeedListing";
import Marketplace from "../../../components/Listings/MarketplaceListing";
import FileListing from "../../../components/Listings/FileListing";
import JobListing from "../../../components/Listings/JobListing";
import LinksListing from "../../../components/Listings/LinksListing";
import PeopleListing from "../../../components/Listings/PeopleListing";

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

				<Column cols="2">
					<div>
						<Panel hasBorder>
							<Panel.Title>Recent News</Panel.Title>
							<NewsListing />
						</Panel>
						<Panel hasBorder>
							<Panel.Title>Upcoming Events</Panel.Title>
							<EventListing />
						</Panel>
						<Panel hasBorder>
							<Panel.Title>Job Opportunities</Panel.Title>
							<JobListing />
						</Panel>
					</div>
					<div>
						<Panel hasBorder>
							<Panel.Title>Your News Feed</Panel.Title>
							<FeedListing />
						</Panel>
						<Panel hasBorder>
							<Panel.Title>Web Services Team</Panel.Title>
							<PeopleListing />
						</Panel>
						<Panel hasBorder>
							<Panel.Title>New Marketplace Items</Panel.Title>
							<Marketplace />
						</Panel>
						<Panel hasBorder>
							<Panel.Title>Key Resources</Panel.Title>
							<FileListing />
						</Panel>
						<Panel hasBorder>
							<Panel.Title>Bookmarks</Panel.Title>
							<LinksListing />
						</Panel>
					</div>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
