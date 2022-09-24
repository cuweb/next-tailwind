import type { NextPage } from "next";
import Head from "next/head";
import FooterIntranet from "../../../../build-files/components/Footer/FooterIntranet/FooterIntranet";
import Navbar from "../../../../components/Navbar/Navbar";
import Settings from "../../../../components/Intranet-Old/Settings";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Settings - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-[#f3f3f3]">
				<Navbar />
				<Settings />
				<FooterIntranet />
			</div>
		</>
	);
};

export default Intranet;
