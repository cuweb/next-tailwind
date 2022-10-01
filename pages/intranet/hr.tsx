import type { NextPage } from "next";
import Head from "next/head";

import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import DashboardPanel from "../../_rds-final/layouts/DashboardPanel/DashboardPanel";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import Profile from "../../_rds-final/components/Banner/Profile/Profile";

import Files from "../../components/Listings/FileListing";

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
				<Container>
					<Column cols="2">
						<DashboardPanel>
							<DashboardPanel.Title>Top 5</DashboardPanel.Title>
							<Files />
						</DashboardPanel>

						<DashboardPanel>
							<DashboardPanel.Title>News</DashboardPanel.Title>
							<Files />
						</DashboardPanel>
					</Column>
				</Container>

				{/* <Container.Gray>
					<Column cols="2"Third>
						<Panel className="bg-white rounded-lg">
                        <Top5 />
                        <NewsFeed />
						</Panel>
						<Panel className="bg-white rounded-lg">
						</Panel>
					</Column>
				</Container> */}
				{/* <Container.Gray>
					<Column cols="2">
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
					</Column>
				</Container>
				<Container.Gray>
					<Column cols="3">
						<DashboardPanel>
							<DashboardPanel.Title>Files</DashboardPanel.Title>
							<Files />
						</DashboardPanel>
						<DashboardPanel>
							<DashboardPanel.Title>
								Bookmarks
							</DashboardPanel.Title>
							<Bookmarks />
						</DashboardPanel>
						<DashboardPanel>
							<DashboardPanel.Title>
								Job Postings
							</DashboardPanel.Title>
							<JobListing />
						</DashboardPanel>
					</Column>
				</Container> */}
			</main>
		</>
	);
};

export default Intranet;
