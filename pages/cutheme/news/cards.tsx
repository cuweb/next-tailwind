import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import FooterSimple from "../_components/FooterSimple/FooterSimple";
import CuThemeNav from "../_components/TopNav/TopNav";
import NewsCardContent from "./_content-cards";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="News Card Grid Layouts" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cu-temp-5xl cutheme-spacing cutheme-spacing--5xl max-w-none md:prose-xl">
					<NewsCardContent />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
