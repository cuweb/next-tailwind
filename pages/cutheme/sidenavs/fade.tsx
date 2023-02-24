import type { NextPage } from "next";
import Head from "next/head";
import { Banner, FooterStandard, TopNav } from "rds-tailwind";
import CuThemeContent from "../_components.old/Content/Content";
import FocusNav from "../_components.old/FocusNav/FocusNav";
import SideNavFade from "../_components.old/SideNav/SideNavFade";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FocusNav />

			<TopNav
				logoUrl="https://carleton.ca/"
				title="WordPress ¯\_(ツ)_/¯"
			/>

			<Banner
				// align="left"
				isType="dark-wave"
				title="Darth Fader"
			/>

			<main className="px-8">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<SideNavFade />

					<section className="py-14">
						<article className="prose-cutheme prose max-w-none lg:prose-lg">
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
