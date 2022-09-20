import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/FooterStandard";
import Container from "../../../layout/Container/Container";
import Columns from "../../../layout/Columns/Columns";
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
					Grids &amp; Layouts: Two Columns
				</h1>
			</header>

			<main>
				<Container bgColor="white">
					<Columns columns="grid-cols-2" maxWidth="4xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="white">
					<Columns columns="grid-cols-2" maxWidth="full">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="gray">
					<Columns columns="grid-cols-2" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="gray">
					<Columns columns="grid-cols-2" maxWidth="3xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="white">
					<Columns columns="grid-cols-2" maxWidth="3xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="white">
					<Columns columns="grid-cols-2" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="gray">
					<Columns columns="grid-cols-2" maxWidth="4xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="gray">
					<Columns columns="grid-cols-2" maxWidth="3xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
