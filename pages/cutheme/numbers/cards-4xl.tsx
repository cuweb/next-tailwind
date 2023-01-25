import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import FooterSimple from "../_components/FooterSimple/FooterSimple";
import CuThemeNav from "../_components/TopNav/TopNav";
import NumbersCardContent from "./_content-cards";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="numbers @ 4xl (896px)" />

			<main className="mx-10">
				<section className="prose prose-cutheme cutheme-spacing cutheme-spacing--4xl max-w-none md:prose-xl">
					<NumbersCardContent />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
