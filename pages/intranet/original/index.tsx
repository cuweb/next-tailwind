import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../../../components/Header/Profile";
import Events from "../../../components/Intranet/Events";
import News from "../../../components/Intranet/News";
import Files from "../../../components/Intranet/Files";
import Top5 from "../../../components/Intranet/Top5";
import {
	Bookmarks,
	BookmarksEmpty,
} from "../../../components/Intranet/Bookmarks";
import FooterIntranet from "../../../components/Footer/FooterIntranet";
import Marketplace from "../../../components/Intranet/Marketplace";
import Navbar from "../../../components/Intranet/Navbar";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-cu-black-50">
				<Navbar />
				<Profile />

				<div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
					<Top5 />
					<News />
				</div>

				<div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
					<Events />
					<Marketplace />
				</div>

				<div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
					<Files />
					<Bookmarks />
					<BookmarksEmpty />
				</div>

				<FooterIntranet />
			</div>
		</>
	);
};

export default Intranet;
