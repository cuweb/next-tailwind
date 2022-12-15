import type { NextPage } from "next";
import Head from "next/head";
import {
	Container,
	TopNav,
	Banner,
	FooterBasic,
	FooterStandard,
} from "rds-tailwind";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

// OLD SCHOOL RDS
import FooterCondensed from "../../../_rds-final/components/Footer/FooterCondensed/FooterCondensed";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="CU Prototypes" />

			<Banner
				align="horizontal"
				isType="dark-wave"
				title="Footer Examples"
			/>

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
		</>
	);
};

export default Home;
