import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../build-files/components/Navbar/IntranetNavbar";
import Footer from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Container from "../../build-files/layouts/Container/Container";
import Columns from "../../build-files/layouts/Columns/Columns";
import BaseBanner from "../../build-files/components/Banner/BaseBanner/BaseBanner";
import Panel from "../../build-files/layouts/Panel/Panel";
import Toast from "../../build-files/components/Toasts/Toasts";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Layouts, Grids &amp; Spacing</BaseBanner>

			<main>
				<Container.White>
					<Columns.Two>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Columns.Two>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
