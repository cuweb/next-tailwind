import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/FooterStandard";

const projects = [
	{
		name: "Events Calendar",
		initials: "EC",
		href: "/event-calendar",
		bgColor: "bg-cu-red",
	},
	{
		name: "Carleton Intranet",
		initials: "CI",
		href: "/intranet",
		bgColor: "bg-cu-black-700",
	},
	{
		name: "cuTheme",
		initials: "WP",
		href: "/cutheme",
		bgColor: "bg-cyan-600",
	},
];

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<div>
				<div>
					<img
						className="object-cover w-full h-32 lg:h-72"
						src="/cu-campus-banner.jpg"
						alt=""
					/>
				</div>
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
						<div className="flex">
							<img
								className="w-24 h-24 rounded-full ring-2 ring-white sm:h-32 sm:w-32"
								src="/cu-avatar.jpg"
								alt=""
							/>
						</div>
						<div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
							<div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
								<h1 className="text-2xl font-bold text-gray-900">
									Web Services Prototypes
								</h1>
							</div>
						</div>
					</div>
					<div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
						<h1 className="text-2xl font-bold text-gray-900 truncate">
							Web Services Prototypes
						</h1>
					</div>
				</div>
			</div>

			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<ul
					role="list"
					className="grid grid-cols-1 gap-5 mt-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
				>
					{projects.map((project) => (
						<li key={project.name}>
							<a
								href={project.href}
								className="flex col-span-1 rounded-md shadow-sm"
							>
								<div
									className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white rounded-l-md bg-cu-red"
									// className={classNames(
									// 	project.bgColor,
									// 	"flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
									// )}
								>
									{project.initials}
								</div>

								<div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md hover:bg-gray-50">
									<div className="flex-1 px-4 py-2 text-sm truncate">
										<p className="py-4 font-medium text-gray-900">
											{project.name}
										</p>
									</div>
									<div className="flex-shrink-0 pr-2">
										<ChevronRightIcon
											className="w-5 h-5 text-cu-black-500"
											aria-hidden="true"
										/>
									</div>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>

			<Footer />
		</>
	);
};

export default Home;
