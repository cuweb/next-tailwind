import type { NextPage } from "next";
import Head from "next/head";
import { TopNav, FooterStandard, Banner } from "rds-tailwind";
import SideNavLight from "../components/SideNav/SideNavLight";
import CardGridEvents from "../components/Events/Grid";
import ListItemsEvents from "../components/Events/Listing";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav
				logoUrl="https://carleton.ca/"
				title="WordPress ¯\_(ツ)_/¯"
			/>

			<Banner
				align="horizontal"
				isType="animated"
				title="Event Card Grid and Listing Blocks"
			/>

			<main className="px-8">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<SideNavLight />

					<section className="py-14">
						<article className="prose prose-cutheme max-w-none lg:prose-lg">
							<p>
								Quis semper vulputate aliquam venenatis egestas
								sagittis quisque orci. Donec commodo sit viverra
								aliquam porttitor ultrices gravida eu. Tincidunt
								leo, elementum mattis elementum ut nisl, justo,
								amet, mattis. Nunc purus, diam commodo tincidunt
								turpis. Amet, duis sed elit interdum dignissim.
							</p>

							<CardGridEvents />

							<h2>Event Listing</h2>

							<ListItemsEvents />

							<p>
								Maecenas pellentesque id sed tellus mauris,
								ultrices mauris. Tincidunt enim cursus ridiculus
								mi. Pellentesque nam sed nullam sed diam turpis
								ipsum eu a sed convallis diam.
							</p>
						</article>
					</section>
				</div>
			</main>

			<FooterStandard />
		</>
	);
};

export default CuTheme;
