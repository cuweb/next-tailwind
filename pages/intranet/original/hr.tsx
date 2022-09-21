import type { NextPage } from "next";
import Head from "next/head";
import FooterIntranet from "../../../components/Footer/FooterIntranet";
import Files from "../../../components/Intranet/original/Files";
import Navbar from "../../../components/Intranet/original/Navbar";
import Profile from "../../../components/Header/Profile";
import Table from "../../../components/Intranet/original/Table";

const IntranetHR: NextPage = () => {
	return (
		<>
			<Head>
				<title>HR - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-[#f3f3f3]">
				<Navbar />
				<Profile />
				<div className="mx-auto mt-3 max-w-7xl px-6 py-6">
					<h1 className="text-cu-black:900 text-2xl font-semibold tracking-tight">
						Human Resources
					</h1>
				</div>

				<div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
					<Files title="Pay Forms" />
					<Files title="Benefits" />
				</div>

				<div className="mx-auto mt-1 grid max-w-3xl grid-cols-1 gap-6 pt-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
					<Files title="HR Link" />
					<Files title="Pension Statement" />
					<Files title="Quebec Tax form" />
				</div>
				<div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl ">
					<Table />
				</div>
				<FooterIntranet />
			</div>
		</>
	);
};

export default IntranetHR;
