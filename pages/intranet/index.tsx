import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import Profile from "../../components/Header/Profile";
import NavBar from "../../components/Navbar/Navbar";
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import Footer from "../../components/Footer/FooterStandard";
import Top5 from "../../components/Intranet/Top5";
import News from "../../components/Intranet/News";
import Events from "../../components/Intranet/Events";
import Marketplace from "../../components/Intranet/Marketplace";
import Files from "../../components/Intranet/Files";
import Bookmarks from "../../components/Intranet/Bookmarks";

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
							<DashboardPanel.Title>
								News Feed
							</DashboardPanel.Title>
							<News />
						</DashboardPanel>
					</Column.TwoThird>
				</Container.White>

				<Container.Gray>
					<Column.Two>
						<DashboardPanel>
							<DashboardPanel.Title>
								Upcoming Events
							</DashboardPanel.Title>
							<Events />
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
								Another Panel
							</DashboardPanel.Title>
							<News />
						</DashboardPanel>
					</Column.Three>
				</Container.Gray>
			</main>
		</>
	);
};

export default Intranet;
