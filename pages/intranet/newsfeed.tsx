import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../../components/Header/Profile";
import FooterIntranet from "../../components/Footer/FooterIntranet";
import Navbar from "../../components/Intranet/Navbar";
import Events from "../../components/Intranet/Events";
import News from "../../components/Intranet/News";
import { Bookmarks } from "../../components/Intranet/Bookmarks";

const IntranetNewsFeed: NextPage = () => {
	return (
		<>
			<Head>
				<title>Career - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-[#f3f3f3]">
				<Navbar />
				<Profile />
				<div className="px-6 py-6 mx-auto mt-3 max-w-7xl">
					<h1 className="text-2xl font-semibold tracking-tight text-cu-black:900">
						Community News
					</h1>
				</div>
				<div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-3 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
					<Events />
				</div>
				<div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
					<News />
					<Bookmarks />
				</div>
				<FooterIntranet />
			</div>
		</>
	);
};

export default IntranetNewsFeed;
