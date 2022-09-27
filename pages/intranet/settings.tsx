import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import FooterBasic from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";

import Settings from "../../components/Admin/Settings";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Settings - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="relative bg-cu-black-50">
				<NavBar />
				<Settings />
				<FooterBasic />
			</div>
		</>
	);
};

export default Intranet;
