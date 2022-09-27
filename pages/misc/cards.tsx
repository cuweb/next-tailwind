import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../_rds-final/components/Navbar/CuTheme";
import FooterBasic from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import FooterStandard from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import FooterCondensed from "../../_rds-final/components/Footer/FooterCondensed/FooterCondensed";
import FooterSwoosh from "../../_rds-final/components/Footer/FooterSwoosh/FooterSwoosh";
import Container from "../../_rds-final/layouts/Container/Container";
import BaseBanner from "../../_rds-final/components/Banner/BaseBanner/BaseBanner";

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Column from "../../_rds-final/_examples/withUnStyledFlag";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Web Services Prototypes</BaseBanner>

			<Container.White>
				<Column.Four>
					<div>Card</div>
					<div>Card</div>
					<div>Card</div>
					<div>Card</div>
				</Column.Four>
			</Container.White>

			<FooterBasic />
		</>
	);
};

export default Home;
