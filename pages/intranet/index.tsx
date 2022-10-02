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

const styles = {
	panel: `rounded-md border border-cu-black-100 bg-white [&:last-child]:mb-0`,
};

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
						<section>
							<Panel hasShadow>
								<NewsListing />
							</Panel>
							<Panel hasShadow>
								<EventListing />
							</Panel>
						</section>

						<section>
							<Panel hasShadow>
								<FeedListing />
							</Panel>
							<Panel hasShadow>
								<MarketplaceListing />
							</Panel>
						</section>
					</Column>
				</Container>
				<Container bgColor="gray">
					<Column maxWidth="7xl" cols="3" gridGap="8">
						<div>
							<Panel hasBorder hasShadow>
								<FileListing />
							</Panel>
						</div>
						<div>
							<Panel hasBorder hasShadow>
								<JobListing />
							</Panel>
						</div>
						<div>
							<Panel hasBorder hasShadow>
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
