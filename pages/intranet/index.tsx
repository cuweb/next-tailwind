import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import Panel from "../../build-files/layouts/Panel/Panel";
import Profile from "../../components/Header/Profile";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
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
						<Panel.Empty>Test</Panel.Empty>
					</Column.TwoThird>
				</Container.Gray>

				<Container.Gray>
					<Column.TwoThird>
						<News />
						<News />
					</Column.TwoThird>
				</Container.Gray>

				<Container.Gray>
					<Column.Two>
						<News />
						<News />
					</Column.Two>
				</Container.Gray>
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default Intranet;
