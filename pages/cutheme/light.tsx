import type { NextPage } from "next";
import Head from "next/head";
import { TopNav, FooterStandard, Banner } from "rds-tailwind";
import SideNavLight from "./components/SideNavLight";
import CuThemeContent from "./components/_content";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav
				logoUrl="https://carleton.ca/"
				title="WordPress ¯\_(ツ)_/¯"
			/>

			<Banner
				//   align="horizontal"
				isType="dark-wave"
				title="Prototypes with Custom Gutenberg Blocks"
			/>

			<main className="px-8">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<nav className="relative hidden py-14 shadow-sidenav lg:block">
						<SideNavLight />
					</nav>

					<section className="py-14">
						<article className="prose prose-cutheme max-w-none lg:prose-lg">
							<CuThemeContent />
						</article>
					</section>
				</div>
			</main>

			<FooterStandard />
		</>
	);
};

export default CuTheme;
