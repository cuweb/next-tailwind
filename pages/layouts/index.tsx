import type { NextPage } from "next";
import Head from "next/head";

import EventListing from "../../components/Listings/EventListing";
import FeedListing from "../../components/Listings/FeedListing";
import NewsListing from "../../components/Listings/NewsListing";
import FileListing from "../../components/Listings/FileListing";
import MarketplaceListing from "../../components/Listings/MarketplaceListing";

import { Container, Column, Banner, TopNav, FooterBasic } from "rds-tailwind";

const styles = {
	panel: `mb-8 rounded-md border border-cu-black-100 bg-white [&:last-child]:mb-0`,
};

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="Layouts" />

			<Banner
				align="horizontal"
				isType="dark-wave"
				title="Layout Examples"
			/>

			<main>
				<Container>
					<Column maxWidth="5xl" cols="3" gridGap="8">
						<p className="p-6 bg-white border rounded-md border-cu-black-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
					</Column>

					<Column maxWidth="3xl" cols="2" gridGap="8">
						<p className="p-6 bg-white border rounded-md border-cu-black-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
						<p className="p-6 bg-white border rounded-md border-cu-black-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras vel urna in mauris lacinia convallis.
						</p>
					</Column>

					<Column maxWidth="7xl" cols="2/3" gridGap="8">
						<section>
							<div className={styles.panel}>
								<NewsListing />
							</div>
							<div className={styles.panel}>
								<EventListing />
							</div>
						</section>

						<section>
							<div className={styles.panel}>
								<FeedListing />
							</div>
							<div className={styles.panel}>
								<FileListing />
							</div>
							<div className={styles.panel}>
								<MarketplaceListing />
							</div>
						</section>
					</Column>
				</Container>
			</main>

			<Container>
				<Column cols="2" maxWidth="3xl" gridGap="4">
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
				</Column>
				<Column cols="3" maxWidth="5xl" gridGap="4">
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Cras vel urna in mauris lacinia convallis. Curabitur a
						nibh quis leo laoreet porttitor.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
				</Column>
				<Column cols="4" maxWidth="7xl" gridGap="4">
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Cras vel urna in mauris lacinia convallis. Curabitur a
						nibh quis leo laoreet porttitor.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Cras vel urna in mauris lacinia convallis. Curabitur a
						nibh quis leo laoreet porttitor.
					</p>
				</Column>
			</Container>

			<Container bgColor="grey">
				<Column cols="2" maxWidth="3xl" gridGap="4">
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
				</Column>
				<Column cols="3" maxWidth="5xl" gridGap="4">
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Cras vel urna in mauris lacinia convallis. Curabitur a
						nibh quis leo laoreet porttitor.
					</p>
				</Column>
				<Column cols="4" maxWidth="7xl" gridGap="4">
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras vel urna in mauris lacinia convallis.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Cras vel urna in mauris lacinia convallis. Curabitur a
						nibh quis leo laoreet porttitor.
					</p>
					<p className="p-6 bg-white border rounded-md border-cu-black-200">
						Cras vel urna in mauris lacinia convallis. Curabitur a
						nibh quis leo laoreet porttitor.
					</p>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default PageLayout;
