import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../../../build-files/components/Navbar/IntranetNavbar";
import FooterIntranet from "../../../../build-files/components/Footer/FooterIntranet/FooterIntranet";
import Settings from "../../../../components/Intranet/Settings";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Settings - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-[#f3f3f3]">
				<NavBar />
				<Settings />
				<FooterIntranet />
			</div>
		</>
	);
};

export default Intranet;
