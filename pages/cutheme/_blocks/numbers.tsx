import type { NextPage } from "next";
import Head from "next/head";
import { Banner, FooterStandard, TopNav } from "rds-tailwind";
import FocusNav from "../_components.old/FocusNav/FocusNav";
import CardGridNumber from "../_components.old/Numbers/Grid";
import SideNavLight from "../_components.old/SideNav/SideNavLight";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FocusNav />

			<TopNav
				logoUrl="https://carleton.ca/"
				title="WordPress ¯\_(ツ)_/¯"
			/>

			<Banner
				// align="left"
				isType="red-wave"
				title="Number Card Grid Blocks"
			/>

			<main className="px-8">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<SideNavLight />

					<section className="py-14">
						<article className="prose-cutheme prose max-w-none lg:prose-lg">
							<p>
								Quis semper vulputate aliquam venenatis egestas
								sagittis quisque orci. Donec commodo sit viverra
								aliquam porttitor ultrices gravida eu. Tincidunt
								leo, elementum mattis elementum ut nisl, justo,
								amet, mattis. Nunc purus, diam commodo tincidunt
								turpis. Amet, duis sed elit interdum dignissim.
							</p>

							<CardGridNumber />

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
