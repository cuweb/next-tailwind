import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import FooterBasic from "../../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../../_rds-final/layouts/Container/Container";
import Column from "../../../_rds-final/layouts/Columns/Columns";
import Banner from "../../../_rds-final/components/Banner/Banner/Banner";
import JobListing from "../../../components/Listings/JobListing";
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
				<Banner.Title title="Job Listing" />
			</Banner>

			<Container>
				<Column>
					<ListSubNav />
				</Column>

				<Column cols="2">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<JobListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<JobListing />
						</div>
					</div>
				</Column>

				<Column>
					<div className="border rounded-lg border-cu-black-100">
						<JobListing />
					</div>
				</Column>

				<Column cols="2/3">
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<JobListing />
						</div>
					</div>
					<div>
						<div className="border rounded-lg border-cu-black-100">
							<JobListing />
						</div>
					</div>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
