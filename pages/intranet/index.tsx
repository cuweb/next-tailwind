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
import IntranetBanner from "../../components/Banner/IntranetBanner";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
			<IntranetBanner />

			<main>
				<Container bgColor="gray">
					<Column maxWidth="7xl" cols="2/3" gridGap="8">
						<div className="-mt-32">
							<Panel hasShadow>
								<p className="h-80"></p>
							</Panel>
							<Panel hasShadow>
								<Panel.Title>Your Events</Panel.Title>
								<EventListing />
							</Panel>

							<Column cols="2" isNested>
								<div>
									<Panel hasShadow>
										<Panel.Title>Jobs</Panel.Title>
										<JobListing />
									</Panel>
								</div>
								<div>
									<Panel hasShadow>
										<Panel.Title>Your Files</Panel.Title>
										<FileListing />
									</Panel>
								</div>
							</Column>
						</div>

						<div>
							<Panel hasShadow>
								<Panel.Title>Your Feeds</Panel.Title>
								<FeedListing />
							</Panel>
							<Panel hasShadow>
								<Panel.Title>Your Links</Panel.Title>
								<LinksListing />
							</Panel>
						</div>
					</Column>
				</Container>

				<Container bgColor="gray">
					<Column maxWidth="7xl" cols="1/3" gridGap="8">
						<div>
							<Panel hasShadow>
								<Panel.Title>Marketplace</Panel.Title>
								<MarketplaceListing />
							</Panel>
						</div>
						<div>
							<Panel hasShadow>
								<Panel.Title>Top 5 News</Panel.Title>
								<NewsListing />
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
