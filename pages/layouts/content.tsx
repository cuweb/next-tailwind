import type { NextPage } from "next";
import Head from "next/head";

import EventListing from "../../components/Listings/EventListing";
import FeedListing from "../../components/Listings/FeedListing";
import NewsListing from "../../components/Listings/NewsListing";
import FileListing from "../../components/Listings/FileListing";
import MarketplaceListing from "../../components/Listings/MarketplaceListing";

import { Container, Column, Banner, TopNav, FooterBasic } from "rds-tailwind";

// Font styles
const header1 = "";
const header2 = "";
const header3 = "";
const paragraph = "mb-5";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="Layouts" />

			<Banner align="left" isType="dark-wave" title="Layout Examples" />

			<main>
				<p className={paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
					risus orci, dignissim ut dui nec, aliquet vehicula elit.
					Morbi ut felis eleifend, ultricies lacus id, dignissim
					turpis. Maecenas placerat sem sit amet quam semper, eu
					convallis eros hendrerit. Nunc in nisl mi. Morbi lobortis
					consectetur quam, vitae placerat urna molestie quis. Nam nec
					vehicula erat, at commodo neque. Morbi fringilla nisi vitae
					ligula aliquet, eu iaculis nibh iaculis.
				</p>
				<h2 className="text-2xl font-semibold tracking-tight text-cu-black-800 lg:text-3xl">
					Header Two
				</h2>
				<p className={paragraph}>
					n aliquam nisl risus, non euismod odio condimentum ut. In
					hac habitasse platea dictumst. Aenean vulputate nisl sit
					amet velit finibus lacinia. Nullam sit amet aliquam odio.
					Donec aliquam velit vel vestibulum ultricies.
				</p>
				<p className={paragraph}>
					Pellentesque dictum enim ut libero molestie, id iaculis
					nulla interdum. Integer semper, velit ut convallis ultrices,
					est sem ultricies odio, in vulputate est nisl vitae dui.
					Integer elit felis, porta ac euismod vel, lobortis at nunc.
					Vivamus elit mauris, aliquet at nisl nec, malesuada aliquam
					mi. Curabitur sit amet velit sed sem dapibus commodo.
				</p>
				<h3 className="text-xl font-semibold tracking-tight text-cu-black-800 lg:text-2xl">
					Header Three
				</h3>
				<p className={paragraph}>
					Sed eu pulvinar velit, ac luctus mi. Duis viverra augue ut
					est blandit, eu sagittis lectus posuere. Ut pulvinar leo sed
					lacus hendrerit imperdiet.{" "}
				</p>
				<h4 className="text-lg font-semibold tracking-tight text-cu-black-800">
					Header Four
				</h4>
				<p className={paragraph}>
					Sed eu pulvinar velit, ac luctus mi. Duis viverra augue ut
					est blandit, eu sagittis lectus posuere. Ut pulvinar leo sed
					lacus hendrerit imperdiet.{" "}
				</p>
			</main>

			<FooterBasic />
		</>
	);
};

export default PageLayout;
