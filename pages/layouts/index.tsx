import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../_rds-final/components/Navbar/IntranetNavbar";
import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../../_rds-final/components/Banner/BaseBanner/BaseBanner";
import Panel from "../../_rds-final/layouts/Panel/Panel";

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
					<Column.Two>
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
					</Column.Two>

					<Column.Three>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column.Three>

					<Column.Four>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 rounded-md bg-cu-black-50">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column.Four>

					<Column.OneThird>
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
					</Column.OneThird>

					<Column.TwoThird>
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
					</Column.TwoThird>
				</Container>

				<Container.Gray>
					<Column.Two>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column.Two>

					<Column.Three>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column.Three>

					<Column.Four>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column.Four>

					<Column.OneThird>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column.OneThird>

					<Column.TwoThird>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel className="p-6 bg-white rounded-md">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column.TwoThird>
				</Container.Gray>
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
