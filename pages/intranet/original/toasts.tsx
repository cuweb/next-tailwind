import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../../../components/Navbar/Navbar";
import Profile from "../../../components/Header/Profile";
import News from "../../../components/Intranet/original/News";
import Top5 from "../../../components/Intranet/original/Top5";
import Toast from "../../../components/Intranet/original/Toast";
import FooterIntranet from "../../../components/Footer/FooterIntranet";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="relative bg-[#f3f3f3]">
				<Navbar />
				<Profile />
				<div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
					<Top5 />
					<News />
				</div>

				<FooterIntranet />
				<Toast />
			</div>
		</>
	);
};

export default Intranet;