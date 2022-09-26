import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../_rds-final/components/Navbar/CuTheme";
import Footer from "../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Container from "../_rds-final/layouts/Container/Container";
import Columns from "../_rds-final/layouts/Columns/Columns";
import BaseBanner from "../_rds-final/components/Banner/BaseBanner/BaseBanner";

import {
	CalendarDaysIcon,
	UsersIcon,
	GlobeAltIcon,
	TableCellsIcon,
	WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const projects = [
	{
		id: 1,
		uni: "Carleton",
		name: "Events Calendar",
		link: "/events",
		color: "bg-cu-red",
		icon: CalendarDaysIcon,
	},
	{
		id: 2,
		uni: "Carleton",
		name: "Intranet",
		link: "/intranet",
		color: "bg-cu-blue",
		icon: UsersIcon,
	},
	{
		id: 3,
		uni: "Carleton",
		name: "cuTheme",
		link: "/cutheme",
		color: "bg-cyan-600",
		icon: GlobeAltIcon,
	},
	{
		id: 4,
		uni: "RDS",
		name: "Layouts & Spacing",
		link: "/layouts",
		color: "bg-green-700",
		icon: TableCellsIcon,
	},
	{
		id: 5,
		uni: "Carleton",
		name: "Miscellaneous",
		link: "/misc",
		color: "bg-cu-black-700",
		icon: WrenchScrewdriverIcon,
	},
];

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<BaseBanner>Web Services Prototypes</BaseBanner>

			<main>
				<Container.White>
					<Columns.One>
						<dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
							{projects.map((project) => (
								<div
									key={project.id}
									className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:px-6 sm:pt-6"
								>
									<dt>
										<div
											className={`${project.color} absolute rounded-md p-3`}
										>
											<project.icon
												className="w-6 h-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<p className="ml-16 text-sm font-medium text-gray-500 truncate">
											{project.uni}
										</p>
									</dt>
									<dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
										<p className="text-2xl font-semibold text-gray-900">
											{project.name}
										</p>
										<div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6">
											<div className="text-sm">
												<a
													href={project.link}
													className="font-medium text-cu-red hover:text-cu-blue"
												>
													{" "}
													View prototypes
												</a>
											</div>
										</div>
									</dd>
								</div>
							))}
						</dl>
					</Columns.One>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default Home;
