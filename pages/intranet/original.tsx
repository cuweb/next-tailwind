import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import EventListing from "../../components/Listings/EventListing";
import FeedListing from "../../components/Listings/FeedListing";
import NewsListing from "../../components/Listings/NewsListing";
import FileListing from "../../components/Listings/FileListing";
import MarketplaceListing from "../../components/Listings/MarketplaceListing";

import IntranetBanner from "../../components/Banner/IntranetBanner";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import UserDetails from "../../components/UserDetails/UserDetails";

import { Container, Column, Panel, Banner, FooterBasic } from "rds-tailwind";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
			<Banner isType="red-wave" />
			{/* <IntranetBanner /> */}

			<main>
				<Container bgColor="grey">
					<Column maxWidth="7xl" cols="2/3" gridGap="10">
						<div className="z-20 -mt-44">
							<UserDetails />
							<QuickLinks />

							<Panel hasShadow>
								<EventListing />
							</Panel>
							<Panel hasShadow>
								<NewsListing />
							</Panel>
						</div>

						<div>
							<Panel hasShadow>
								<FeedListing />
							</Panel>
							<Panel hasShadow>
								<FileListing />
							</Panel>
							<Panel hasShadow>
								<MarketplaceListing />
							</Panel>
						</div>
					</Column>
				</Container>
			</main>

			<FooterBasic />
		</>
	);
};

export default PageLayout;
