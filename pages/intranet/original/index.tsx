import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../../../components/Header/Profile";
import Events from "../../../components/Intranet/Events";
import News from "../../../components/Intranet/News";
import FileListing from "../../../template-parts/listings/FileListing";
import Top5 from "../../../components/Intranet/Top5";
import LinksListing from "../../../template-parts/listings/LinksListing";
import FooterIntranet from "../../../build-files/components/Footer/FooterIntranet/FooterIntranet";
import Marketplace from "../../../components/Intranet/Marketplace";
import NavBar from "../../../build-files/components/Navbar/IntranetNavbar";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-cu-black-50">
				<NavBar />
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
					<FileListing />
					<LinksListing />
					<LinksListing />
				</div>

				<FooterIntranet />
			</div>
		</>
	);
};

export default Intranet;
