import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import FooterSimple from "../_components/FooterSimple/FooterSimple";
import CuThemeNav from "../_components/TopNav/TopNav";
import PeopleExample from "./_content-example";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="Company Org Chart" isType="red-wave" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cutheme-spacing max-w-none md:prose-xl">
					<PeopleExample />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
