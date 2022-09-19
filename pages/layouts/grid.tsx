import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import Profile from "../../components/Header/Profile";
import PageContent from "./_content";
import PagePanel from "./_panel";

// Spacing styles
// const containerSpacing

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			{/* <Profile /> */}

			<header className="py-8 bg-cu-black-400 md:py-12">
				<div className="cu-container-1280">
					<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
						Page Template
					</h1>
				</div>
			</header>

			<main>
				<div className="cu-block-white">
					<div className="cu-container-1280 cu-column">
						<div>
							<PagePanel />
						</div>
					</div>
				</div>

				<div className="cu-block-white">
					<div className="cu-container-1280 cu-columns-2">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</div>
				</div>

				<div className="cu-block-gray">
					<div className="cu-container-1280 cu-column">
						<div>
							<PagePanel />
						</div>
					</div>
				</div>

				<div className="cu-block-gray">
					<div className="cu-container-1280 cu-columns-2">
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
