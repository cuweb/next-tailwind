import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/FooterStandard";
import Columns from "../../../build-files/layouts/Columns/Columns";
import PagePanel from "../components/_panel";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header className="bg-cu-black-50">
				<h1 className="max-w-4xl px-8 py-12 mx-auto text-3xl font-medium tracking-tight text-center text-cu-black-800 md:text-4xl">
					Grids &amp; Layouts: No Containers
				</h1>
			</header>

			<main>
				<Columns columns="grid-cols-2" maxWidth="4xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>

				<Columns columns="grid-cols-2" maxWidth="full">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>
				<Columns columns="grid-cols-2" maxWidth="7xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>
				<Columns columns="grid-cols-2" maxWidth="3xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>

				<Columns columns="grid-cols-2" maxWidth="3xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>
				<Columns columns="grid-cols-2" maxWidth="7xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>
				<Columns columns="grid-cols-2" maxWidth="4xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>
				<Columns columns="grid-cols-2" maxWidth="3xl">
					<div>
						<PagePanel />
					</div>
					<div>
						<PagePanel />
					</div>
				</Columns>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
