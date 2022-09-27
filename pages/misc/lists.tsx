import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../_rds-final/components/Navbar/CuTheme";
import FooterBasic from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import EventListing from "../../components/Listings/EventListing";
import NewsFeed from "../../components/Listings/NewsFeed";
import Top5 from "../../components/Listings/Top5";
import Marketplace from "../../components/Listings/Marketplace";
import JobItem from "../../_rds-final/components/ListingItem/JobItem/JobItem";
import JobListing from "../../components/Listings/JobListing";
import LinksListing from "../../components/Listings/LinksListing";
import FileListing from "../../components/Listings/FileListing";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Web Services Prototypes</BaseBanner>

			<Container.White>
				<Column.One>
					<div>
						<div className="border rounded-lg border-cu-black-200">
							<Top5 />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<NewsFeed />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<EventListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<Marketplace />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<JobListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<FileListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<LinksListing />
						</div>
					</div>
				</Column.One>

				<Column.Two>
					<div>
						<div className="border rounded-lg border-cu-black-200">
							<Top5 />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<NewsFeed />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<EventListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<Marketplace />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<JobListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<FileListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<LinksListing />
						</div>
					</div>
				</Column.Two>

				<Column.Three>
					<div>
						<div className="border rounded-lg border-cu-black-200">
							<Top5 />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<NewsFeed />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<EventListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<Marketplace />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<JobListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<FileListing />
						</div>
					</div>

					<div>
						<div className="border rounded-lg border-cu-black-200">
							<LinksListing />
						</div>
					</div>
				</Column.Three>
			</Container.White>

			<FooterBasic />
		</>
	);
};

export default Home;
