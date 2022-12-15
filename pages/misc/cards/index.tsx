import type { NextPage } from "next";
import Head from "next/head";
import { Container, Column, TopNav, Banner, FooterBasic } from "rds-tailwind";
import GridSubNav from "./_GridSubnav";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="CU Prototypes" />

			<Banner
				align="horizontal"
				isType="dark-wave"
				title="Card Examples"
			/>

			<Container>
				<Column>
					<GridSubNav />
				</Column>
				<Column cols="4">
					<div>Card1</div>
					<div>Card2</div>
					<div>Card3</div>
					<div>Card4</div>
				</Column>
			</Container>

			<FooterBasic />
		</>
	);
};

export default Home;
