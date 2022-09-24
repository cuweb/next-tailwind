import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../build-files/layouts/Container/Container";
import Columns from "../../build-files/layouts/Columns/Columns";
import Profile from "../../components/Header/Profile";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import DashboardPanel from "../../build-files/layouts/DashboardPanel/DashboardPanel";
import Top5 from "../../components/Intranet/Top5";
import News from "../../components/Intranet/News";
import EventListing from "../../template-parts/listings/EventListing";
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
				<Container.Gray>
					<Columns.TwoThird>
						<Top5 />
						<News />
					</Columns.TwoThird>
				</Container.Gray>

				<Container.Gray>
					<Columns.Two>
						<EventListing />
						<Marketplace />
					</Columns.Two>
				</Container.Gray>

				<Container.Gray>
					<Columns.Two>
						<Files />
						<Bookmarks />
						<DashboardPanel
							title="Random Panel"
							innerPadding="p-6"
						/>
					</Columns.Two>
				</Container.Gray>
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default Intranet;
