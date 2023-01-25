import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import Content from "../_components/Content/Content";
import ContentAllCards from "../_components/Content/Content.AllCards";
import FooterSimple from "../_components/FooterSimple/FooterSimple";
import CuThemeNav from "../_components/TopNav/TopNav";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="content @ 5xl (1024px)" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cutheme-spacing cutheme-spacing--5xl max-w-none md:prose-xl">
					<Content />
					<ContentAllCards />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
