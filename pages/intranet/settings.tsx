import type { NextPage } from "next";
import Head from "next/head";

import FooterStandard from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Settings from "../../components/Settings/Settings";
import Navbar from "../../components/Navbar/Navbar";

const Demo: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Settings />
			<FooterStandard />
		</>
	);
};

export default Demo;
