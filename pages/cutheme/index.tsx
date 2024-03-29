import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import CuThemeContent from "./_components/Content/Content";
import FooterSimple from "./_components/FooterSimple/FooterSimple";
import CuThemeNav from "./_components/TopNav/TopNav";

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
				<section className="prose prose-lg prose-cutheme cutheme-spacing max-w-none md:prose-xl">
					<CuThemeContent />
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
