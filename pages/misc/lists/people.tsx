import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import Banner from "../../../_rds-final/components/Banner/Banner/Banner";
import PeopleListing from "../../../components/Listings/PeopleListing";
import ListSubNav from "./_ListSubnav";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<Banner>
				<Banner.Title title="People Listing" />
			</Banner>

			<Container>
				<Column>
					<ListSubNav />
				</Column>

				<Column cols="1" maxWidth="3xl">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<PeopleListing />
						</div>
					</div>
				</Column>

				<Column cols="2">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<PeopleListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<PeopleListing />
						</div>
					</div>
				</Column>

				<Column>
					<div className="border rounded-lg border-cu-black-100">
						<PeopleListing />
					</div>
				</Column>

				<Column cols="2/3">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<PeopleListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<PeopleListing />
						</div>
					</div>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
