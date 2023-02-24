import type { NextPage } from "next";
import Head from "next/head";
import { Container, Column, TopNav, Banner, FooterBasic } from "rds-tailwind";

const projects = [
	{
		name: "Card Tests",
		initials: "CT",
		href: "/misc/cards",
		bgColor: "bg-pink-600",
	},
	{
		name: "Footer Tests",
		initials: "FT",
		href: "/misc/footers",
		bgColor: "bg-purple-600",
	},
	{
		name: "Toasts",
		initials: "TS",
		href: "/misc/toasts",
		bgColor: "bg-orange-500",
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="CU Prototypes" />

			<Banner align="left" isType="dark-wave" title="Misc Examples" />

			<main>
				<Container>
					<Column>
						<ul
							role="list"
							className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
						>
							{projects.map((project) => (
								<li
									key={project.name}
									className="col-span-1 flex rounded-md shadow-sm"
								>
									<div
										className={classNames(
											project.bgColor,
											"flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
										)}
									>
										{project.initials}
									</div>
									<div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-b border-r border-gray-200 bg-white">
										<div className="flex-1 truncate px-4 py-4 text-sm">
											<a
												href={project.href}
												className="font-medium text-gray-900 hover:text-gray-600"
											>
												{project.name}
											</a>
										</div>
									</div>
								</li>
							))}
						</ul>
					</Column>
				</Container>
			</main>

			<FooterBasic />
		</>
	);
};

export default Home;
