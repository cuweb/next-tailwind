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

			<Banner align="left" isType="dark-wave" title="Footer Examples" />

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
		</>
	);
};

export default Home;
