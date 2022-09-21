import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../build-files/layouts/Container/Container";
import Columns from "../../build-files/layouts/Columns/Columns";
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import Profile from "../../components/Header/Profile";
import NavBar from "../../components/Navbar/Navbar";
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
				<Container bgColor="gray">
					<Columns columns="md:grid-cols-two3rd" maxWidth="7xl">
						<Top5 />
						<News />
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns columns="md:grid-cols-2" maxWidth="7xl">
						<Events />
						<Marketplace />
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns columns="md:grid-cols-3" maxWidth="7xl">
						<Files />
						<Bookmarks />
						<DashboardPanel
							title="Random Panel"
							innerPadding="p-6"
						/>
					</Columns>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default Intranet;
