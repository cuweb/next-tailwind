import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import Footer from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../_rds-final/components/Banner/BaseBanner/BaseBanner";

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
				<Container>
					<Column cols="2" maxWidth="3xl" gridGap="4">
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
					</Column>
					<Column cols="3" maxWidth="5xl" gridGap="4">
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Cras vel urna in mauris lacinia convallis. Curabitur
							a nibh quis leo laoreet porttitor.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
					</Column>
					<Column cols="4" maxWidth="7xl" gridGap="4">
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Cras vel urna in mauris lacinia convallis. Curabitur
							a nibh quis leo laoreet porttitor.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Cras vel urna in mauris lacinia convallis. Curabitur
							a nibh quis leo laoreet porttitor.
						</p>
					</Column>
				</Container>

				<Container bgColor="gray">
					<Column cols="2" maxWidth="3xl" gridGap="4">
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
					</Column>
					<Column cols="3" maxWidth="5xl" gridGap="4">
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Cras vel urna in mauris lacinia convallis. Curabitur
							a nibh quis leo laoreet porttitor.
						</p>
					</Column>
					<Column cols="4" maxWidth="7xl" gridGap="4">
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Cras vel urna in mauris lacinia convallis. Curabitur
							a nibh quis leo laoreet porttitor.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-200">
							Cras vel urna in mauris lacinia convallis. Curabitur
							a nibh quis leo laoreet porttitor.
						</p>
					</Column>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
