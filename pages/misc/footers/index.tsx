import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import FooterStandard from "../../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import FooterCondensed from "../../../_rds-final/components/Footer/FooterCondensed/FooterCondensed";
import FooterSwoosh from "../../../_rds-final/components/Footer/FooterSwoosh/FooterSwoosh";
import Container from "../../../_rds-final/layouts/Container/Container";
import BaseBanner from "../../../_rds-final/components/Banner/BaseBanner/BaseBanner";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Web Services Prototypes</BaseBanner>

			<Container>
				<h2 className="flex max-w-7xl items-center gap-2 px-12 text-lg">
					FooterBasic <ArrowDownIcon className="h-4 w-4" />
				</h2>
			</Container>
			<FooterBasic />

			<Container>
				<h2 className="flex max-w-7xl items-center gap-2 px-12 text-lg">
					FooterStandard <ArrowDownIcon className="h-4 w-4" />
				</h2>
			</Container>
			<FooterStandard />

			<Container>
				<h2 className="flex max-w-7xl items-center gap-2 px-12 text-lg">
					FooterCondensed <ArrowDownIcon className="h-4 w-4" />
				</h2>
			</Container>
			<FooterCondensed />

			<Container>
				<h2 className="flex max-w-7xl items-center gap-2 px-12 text-lg">
					FooterSwoosh <ArrowDownIcon className="h-4 w-4" />
				</h2>
				<p className="max-w-7xl px-12">Not intended to be used alone</p>
			</Container>
			<FooterSwoosh />
		</>
	);
};

export default Home;
