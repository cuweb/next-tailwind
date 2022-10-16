import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import FooterStandard from "../../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import FooterCondensed from "../../../_rds-final/components/Footer/FooterCondensed/FooterCondensed";
import FooterSwoosh from "../../../_rds-final/components/Footer/FooterSwoosh/FooterSwoosh";
import Container from "../../../_rds-final/layouts/Container/Container";
import Banner from "../../../_rds-final/components/Banner/Banner/Banner";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<Banner>
				<Banner.Title title="Carleton Footers" />
			</Banner>

			<Container>
				<h2 className="flex items-center gap-2 px-12 text-lg max-w-7xl">
					FooterBasic <ArrowDownIcon className="w-4 h-4" />
				</h2>
			</Container>
			<FooterBasic />

			<Container>
				<h2 className="flex items-center gap-2 px-12 text-lg max-w-7xl">
					FooterStandard <ArrowDownIcon className="w-4 h-4" />
				</h2>
			</Container>
			<FooterStandard />

			<Container>
				<h2 className="flex items-center gap-2 px-12 text-lg max-w-7xl">
					FooterCondensed <ArrowDownIcon className="w-4 h-4" />
				</h2>
			</Container>
			<FooterCondensed />

			<Container>
				<h2 className="flex items-center gap-2 px-12 text-lg max-w-7xl">
					FooterSwoosh <ArrowDownIcon className="w-4 h-4" />
				</h2>
				<p className="px-12 max-w-7xl">Not intended to be used alone</p>
			</Container>
			<FooterSwoosh />
		</>
	);
};

export default Home;
