import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import FooterSimple from "../_components/FooterSimple/FooterSimple";
import CuThemeNav from "../_components/TopNav/TopNav";
import EventCardContent from "./_content-cards";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="Event Card Grid Layouts" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cutheme-spacing max-w-none md:prose-xl">
					<EventCardContent />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
