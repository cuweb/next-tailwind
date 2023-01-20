import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import CuThemeNav from "../components/TopNav/TopNav";
import CuThemeContent from "../components/Content/Content";
import FooterSimple from "../components/FooterSimple/FooterSimple";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="cutheme prototypes" />

			<main className="mx-10">
				<section className="prose prose-cutheme cutheme-spacing max-w-none lg:prose-lg">
					<CuThemeContent />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
