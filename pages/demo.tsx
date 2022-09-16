import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/FooterStandard";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Spotlight from "../components/Spotlight/Spotlight";

const Demo: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Header />
			<Spotlight />
			<Featured />
			<Footer />
		</>
	);
};

export default Demo;
