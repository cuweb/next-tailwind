import type { NextPage } from "next";
import Head from "next/head";

import FooterStandard from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Settings from "../../components/Settings/Settings";
import NavBar from "../../components/Intranet/Navbar";

const Demo: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Settings />
			<FooterStandard />
		</>
	);
};

export default Demo;
