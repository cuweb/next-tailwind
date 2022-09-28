import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import DashboardPanel from "../../_rds-final/layouts/DashboardPanel/DashboardPanel";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import Profile from "../../_rds-final/components/Banner/Profile/Profile";

import NewsListing from "../../components/Listings/NewsListing";
import FeedListing from "../../components/Listings/FeedListing";
import EventListing from "../../components/Listings/EventListing";
import Marketplace from "../../components/Listings/MarketplaceListing";
import Files from "../../components/Listings/FileListing";
import LinksListing from "../../components/Listings/LinksListing";
import JobListing from "../../components/Listings/JobListing";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
			<Profile />

			<main>
				<Container.White>
					<Column.TwoThird>
						<DashboardPanel>
							<DashboardPanel.Title>Top 5</DashboardPanel.Title>
							<NewsListing />
						</DashboardPanel>

						<DashboardPanel>
							<DashboardPanel.Title>News</DashboardPanel.Title>
							<FeedListing />
						</DashboardPanel>
					</Column.TwoThird>
				</Container.White>

				{/* <Container.Gray>
					<Column.TwoThird>
						<Panel className="bg-white rounded-lg">
                        <NewsListing />
                        <FeedListing />
						</Panel>
						<Panel className="bg-white rounded-lg">
						</Panel>
					</Column.TwoThird>
				</Container.Gray> */}

				<Container.Gray>
					<Column.Two>
						<DashboardPanel>
							<DashboardPanel.Title>
								Upcoming Events
							</DashboardPanel.Title>
							<EventListing />
						</DashboardPanel>
						<DashboardPanel>
							<DashboardPanel.Title>
								Marketplace
							</DashboardPanel.Title>
							<Marketplace />
						</DashboardPanel>
					</Column.Two>
				</Container.Gray>

				<Container.Gray>
					<Column.Three>
						<div>
							<DashboardPanel>
								<DashboardPanel.Title>
									Files
								</DashboardPanel.Title>
								<Files />
							</DashboardPanel>
						</div>
						<div>
							<DashboardPanel>
								<DashboardPanel.Title>
									My Links
								</DashboardPanel.Title>
								<LinksListing />
							</DashboardPanel>
						</div>
						<div>
							<DashboardPanel>
								<DashboardPanel.Title>
									Job Postings
								</DashboardPanel.Title>
								<JobListing />
							</DashboardPanel>
						</div>
					</Column.Three>
				</Container.Gray>
			</main>
		</>
	);
};

export default Intranet;
