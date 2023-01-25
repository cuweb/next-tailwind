import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import Content from "../_components/Content/Content";
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
			<Banner title="content @ 3xl (768px)" />

			<main className="mx-10">
				<section className="prose-cutheme cutheme-spacing cutheme-spacing--3xl prose max-w-none lg:prose-lg">
					<Content />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
