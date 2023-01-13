import type { NextPage } from "next";
import Head from "next/head";
import { TopNav, FooterStandard, Banner } from "rds-tailwind";
import FocusNav from "./components-old/FocusNav/FocusNav";
import SideNavLight from "./components-old/SideNav/SideNavLight";
import CuThemeContent from "./components-old/Content/Content";

const styles = {
	gutenbergWidth: `[&>:not(cu-container)]:max-w-5xl [&>:not(cu-container)]:mx-auto`,
};

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

			<Banner isType="dark-wave" title="cutheme prototypes" />

			<main>
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<SideNavLight />

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
