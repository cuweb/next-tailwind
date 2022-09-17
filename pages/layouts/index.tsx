import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterNew";
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

			<Profile />

			{/* <header className="my-8 cu-container-1280 md:my-12">
				<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
					Page Template
				</h1>
			</header> */}

			<main className="py-12 bg-cu-black-50">
				<div className="cu-container-1280 cu-columns-65">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</div>

				<div className="cu-container-1280 cu-columns-35">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</div>

				<div className="cu-container-1280 cu-columns-65">
					<PagePanel />
					<PagePanel />
				</div>

				<div className="cu-container-1280 cu-columns-35">
					<PagePanel />
					<PagePanel />
				</div>

				<div className="cu-container-1280 cu-columns-2">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</div>

				<div className="cu-container-1024">
					<PageContent />
				</div>

				<div className="cu-container-1024 cu-columns-2">
					<div>
						<PageContent />
					</div>
					<div>
						<PageContent />
					</div>
				</div>

				<div className="cu-container-896 cu-columns-2">
					<div>
						<PageContent />
					</div>
					<div>
						<PageContent />
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
