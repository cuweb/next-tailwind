import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import Footer from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import EventListing from "../../components/Listings/EventListing";
import FeedListing from "../../components/Listings/FeedListing";
import NewsListing from "../../components/Listings/NewsListing";
import JobListing from "../../components/Listings/JobListing";
import FileListing from "../../components/Listings/FileListing";
import MarketplaceListing from "../../components/Listings/MarketplaceListing";
import LinksListing from "../../components/Listings/LinksListing";
import Profile from "../../_rds-final/components/Banner/Profile/Profile";
import Panel from "../../_rds-final/layouts/Panel/Panel";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<Profile />

			{/* <BaseBanner>Layouts, Grids &amp; Spacing</BaseBanner> */}

			<main>
				<Container>
					<Column maxWidth="7xl" cols="2/3" gridGap="8">
						<div>
							<Panel hasShadow hasBorder>
								<Panel.Title>Top 5 News</Panel.Title>
								<NewsListing />
							</Panel>
							<Panel hasShadow hasBorder>
								<Panel.Title>Upcoming Events</Panel.Title>
								<EventListing />
							</Panel>
						</div>

						<div>
							<Panel hasShadow hasBorder>
								<Panel.Title>Your Feeds</Panel.Title>
								<FeedListing />
							</Panel>
							<Panel hasShadow hasBorder>
								<Panel.Title>Marketplace</Panel.Title>
								<MarketplaceListing />
							</Panel>
						</div>
					</Column>
				</Container>

				<Container bgColor="gray">
					<Column maxWidth="7xl" cols="3" gridGap="8">
						<div>
							<Panel hasShadow hasBorder>
								<Panel.Title>Files</Panel.Title>
								<FileListing />
							</Panel>
						</div>
						<div>
							<Panel hasShadow hasBorder>
								<Panel.Title>Jobs</Panel.Title>
								<JobListing />
							</Panel>
						</div>
						<div>
							<Panel hasShadow hasBorder>
								<Panel.Title>Links</Panel.Title>
								<LinksListing />
							</Panel>
						</div>
					</Column>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
