import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import NavBar from "../../build-files/components/Navbar/IntranetNavbar";
import Profile from "../../build-files/components/Banner/Profile/Profile";

import Top5 from "../../template-parts/listings/Top5";
import NewsFeed from "../../template-parts/listings/NewsFeed";
import EventListing from "../../template-parts/listings/EventListing";
import Marketplace from "../../template-parts/listings/Marketplace";
import Files from "../../template-parts/listings/FileListing";
import LinksListing from "../../template-parts/listings/LinksListing";
import JobListing from "../../template-parts/listings/JobListing";

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
							<Top5 />
						</DashboardPanel>

						<DashboardPanel>
							<DashboardPanel.Title>News</DashboardPanel.Title>
							<NewsFeed />
						</DashboardPanel>
					</Column.TwoThird>
				</Container.White>

				{/* <Container.Gray>
					<Column.TwoThird>
						<Panel className="bg-white rounded-lg">
                        <Top5 />
                        <NewsFeed />
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
