import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import Panel from "../../build-files/layouts/Panel/Panel";
import Profile from "../../components/Header/Profile";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import Dashboard from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import Top5 from "../../components/Intranet/Top5";
import News from "../../components/Intranet/News";
import Events from "../../components/Intranet/Events";
import Marketplace from "../../components/Intranet/Marketplace";
import Files from "../../components/Intranet/Files";
import Bookmarks from "../../components/Intranet/Bookmarks";
// import Panel from "../../components/Notation/Panel";

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
				<Container.Gray>
					<Column.TwoThird>
						<Dashboard>
							<Dashboard.Title>Top 5</Dashboard.Title>
							<News />
						</Dashboard>

						<Dashboard>
							<Dashboard.Title>News Feed</Dashboard.Title>
							<News />
						</Dashboard>
					</Column.TwoThird>
				</Container.Gray>

				<Container.Gray>
					<Column.Two>
						<Dashboard>
							<Dashboard.Title>Upcoming Events</Dashboard.Title>
							<Events />
						</Dashboard>

						<Dashboard>
							<Dashboard.Title>Marketplace</Dashboard.Title>
							<Marketplace />
						</Dashboard>
					</Column.Two>
				</Container.Gray>

				<Container.Gray>
					<Column.Three>
						<Dashboard>
							<Dashboard.Title>Files</Dashboard.Title>
							<Files />
						</Dashboard>

						<Dashboard>
							<Dashboard.Title>Bookmarks</Dashboard.Title>
							<Bookmarks />
						</Dashboard>

						<Dashboard>
							<Dashboard.Title>Another Panel</Dashboard.Title>
							<News />
						</Dashboard>
					</Column.Three>
				</Container.Gray>
			</main>
		</>
	);
};

export default Intranet;
