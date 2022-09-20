import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import Container from "./_container";
import Columns from "./_columns";
import PagePanel from "./_panel";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header className="max-w-4xl px-8 py-12 mx-auto">
				<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
					Grids &amp; Layouts
				</h1>
			</header>

			<main>
				<Container bgColor="gray">
					<Columns columns="1" maxWidth="4xl">
						<PagePanel />
					</Columns>
				</Container>
				<Container bgColor="gray">
					<Columns columns="1" maxWidth="4xl">
						<PagePanel />
					</Columns>
				</Container>

				<Container bgColor="white">
					<Columns columns="2" maxWidth="4xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="white">
					<Columns columns="2" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns columns="3" maxWidth="4xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="white">
					<Columns columns="2" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default PageLayout;
