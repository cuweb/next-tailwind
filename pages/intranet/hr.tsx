import type { NextPage } from "next";
import Head from "next/head";

import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Panel from "../../_rds-final/layouts/Panel/Panel";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import Profile from "../../_rds-final/components/Banner/Profile/Profile";

import Files from "../../components/Listings/FileListing";

const Intranet: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
			<Profile />

			<main>
				<Container>
					<Column cols="2">
						<Panel hasBorder>
							<Panel.Title>Top 5</Panel.Title>
							<Files />
						</Panel>

						<Panel hasBorder>
							<Panel.Title>News</Panel.Title>
							<Files />
						</Panel>
					</Column>
				</Container>
			</main>
		</>
	);
};

export default Intranet;
