import type { NextPage } from "next";
import Head from "next/head";
import { TopNav, FooterStandard, Banner } from "rds-tailwind";
import CuThemeContent from "./components/_content";
import SideNavFade from "./components/SideNav/SideNavFade";

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
				// align="horizontal"
				isType="dark-wave"
				title="Prototypes with RDS Blocks"
			/>

			<main className="px-8">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<nav className="relative hidden bg-gradient-to-l from-cu-black-50 to-white py-14 lg:block">
						<SideNavFade />
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
