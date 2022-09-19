import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import Profile from "../../components/Header/Profile";
import PageContent from "./_content";
import PagePanel from "./_panel";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header className="py-12 cu-block-896">
				<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
					Grids &amp; Layouts
				</h1>
			</header>

			<main>
				<div className="cu-block-gray cu-block-896 [&+.cu-block-gray]:pt-0">
					<div className="cu-column">
						<PagePanel />
					</div>
				</div>
				<div className="cu-block-gray cu-block-896 [&+.cu-block-gray]:pt-0">
					<div className="cu-column">
						<PagePanel />
					</div>
				</div>

				<div className="cu-block-white cu-block-896 [&+.cu-block-white]:pt-0">
					<div className="cu-column">
						<PagePanel />
					</div>
				</div>
				<div className="cu-block-white cu-block-896 [&+.cu-block-white]:pt-0">
					<div className="cu-column">
						<PagePanel />
					</div>
				</div>

				<div className="cu-block-gray cu-block-896 [&+.cu-block-gray]:pt-0">
					<div className="cu-column-2">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</div>
				</div>

				<div className="cu-block-white cu-block-896 [&+.cu-block-white]:pt-0">
					<div className="cu-column-3">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</div>
				</div>

				<div className="cu-block-gray cu-block-896 [&+.cu-block-gray]:pt-0">
					<div className="cu-column-33">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</div>
				</div>

				<div className="cu-block-white cu-block-896 [&+.cu-block-white]:pt-0">
					<div className="cu-column-66">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
