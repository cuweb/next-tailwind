import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import PageContent from "./_content";
import Files from "../../components/Intranet/Files";

// Container styles
const containerMax = "px-6 mx-auto max-w-5xl md:px-8";
const container2col = "md:mb-5 md:grid md:grid-cols-2 md:gap-12";

// Spacing styles
// const containerSpacing

// Font styles
const header1 = "";
const header2 = "";
const header3 = "";
const paragraph = "mb-5";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header className={`${containerMax} my-8 md:my-12`}>
				<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
					Page Template
				</h1>
				{/* <h1 className={headerOne}>Page Template</h1> */}
			</header>

			<main className="mb-12">
				<div className={`${containerMax} ${container2col}`}>
					<div className="bg-cu-black-0">
						<PageContent />
					</div>
					<div className="bg-cu-black-0">
						<PageContent />
					</div>
				</div>

				<div className={containerMax}>
					<PageContent />
				</div>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
