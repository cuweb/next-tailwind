import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import ContentVideos from "../_components/Content/Content.Videos";
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
			<Banner title="videos @ 5xl (1024px)" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cu-temp-5xl cutheme-spacing cutheme-spacing--5xl max-w-none md:prose-xl">
					<ContentVideos />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
