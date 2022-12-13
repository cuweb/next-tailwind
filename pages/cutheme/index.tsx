import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../_rds-final/components/Navbar/CuTheme";
import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Banner from "../../_rds-final/components/Banner/Banner/Banner";
import Panel from "../../_rds-final/layouts/Panel/Panel";

const paragraph = "mb-5";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<Banner>
				<Banner.Title title="cuTheme" />
			</Banner>

			<main>
				<Container>Hello</Container>
			</main>

			<Footer />
		</>
	);
};

export default CuTheme;
