import type { NextPage } from "next";
import Head from "next/head";
import { FooterStandard, Banner } from "rds-tailwind";
import CuThemeNav from "./components/TopNav/TopNav";
import FocusNav from "./components/FocusNav/FocusNav";
import CuThemeContent from "./components/Content/Content";
import CuThemeContentTesting from "./components/Content/Testing";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FocusNav />
			<CuThemeNav />
			<Banner title="cutheme prototypes" />

			<main className="mx-10">
				<section className="prose prose-cutheme cutheme-spacing max-w-none lg:prose-lg">
					<CuThemeContent />
					<CuThemeContentTesting />
				</section>
			</main>

			<FooterStandard />
		</>
	);
};

export default CuTheme;
