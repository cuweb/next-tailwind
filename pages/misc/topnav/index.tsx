import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../../_rds-final/components/Navbar/EventNavbar";
import TopNavTw from "./TopNavTw";
import TopNav1 from "./TopNav1";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNavTw />

			<br />
			<br />

			<TopNav1 />
		</>
	);
};

export default Home;
