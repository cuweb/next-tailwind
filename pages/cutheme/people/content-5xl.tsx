import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import ContentPeople from "../_components/Content/Content.People";
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
			<Banner title="events @ 5xl (1024px)" />

			<main className="mx-10">
				<section className="prose-cutheme cutheme-spacing cutheme-spacing--5xl prose prose-lg max-w-none md:prose-xl">
					<ContentPeople />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
