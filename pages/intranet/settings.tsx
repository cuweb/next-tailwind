import type { NextPage } from "next";
import Head from "next/head";
import FooterCurrent from "../../components/Footer/FooterCurrent";
import Settings from "../../components/Settings/Settings";
import Navbar from "../../components/Intranet/Navbar";

const IntranetSetting: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Settings />
			<FooterCurrent />
		</>
	);
};

export default IntranetSetting;
