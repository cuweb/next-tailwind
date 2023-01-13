import type { NextPage } from "next";
import Head from "next/head";
import { FooterStandard, Banner, Container, Column } from "rds-tailwind";
import CuThemeNav from "./components/TopNav/TopNav";
import FocusNav from "./components/FocusNav/FocusNav";
import CuThemeContent from "./components/Content/Content";
import { gutenStyles } from "./_cuthemeClasses";

const styles = {
	// gutenbergSpacing: `[&>:not(.cu-container):not(.cu-column)]:px-12`,
	gutenbergSpacing: ``,
	gutenbergWidth: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
	gutenbergFirst: `first:[&>:not(.cu-container):not(.cu-column)]:mt-12`,
	gutenbergLast: `last:[&>:not(.cu-container):not(.cu-column)]:mb-16`,
};

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
				<section
					className={`prose-cutheme prose max-w-none lg:prose-lg ${gutenStyles}`}
				>
					<CuThemeContent />
				</section>
			</main>

			<FooterStandard />
		</>
	);
};

export default CuTheme;
