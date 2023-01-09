import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Error404: NextPage = () => {
	return (
		<>
			<Head>
				<title>404 - Page Not Found | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col min-h-full bg-white lg:relative">
				<div className="flex flex-col flex-grow">
					<main className="flex flex-col flex-grow bg-white">
						<div className="flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
							<div className="flex-shrink-0 pt-10 sm:pt-16">
								<Link href="/" className="inline-flex">
									<span className="sr-only">
										Your Company
									</span>
									<Image
										className="w-auto h-12"
										src="/cu-shield.svg"
										alt=""
									/>
								</Link>
							</div>
							<div className="flex-shrink-0 py-16 my-auto sm:py-32">
								<p className="text-base font-semibold text-cu-red">
									404
								</p>
								<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									Page not found
								</h1>
								<p className="mt-2 text-base text-gray-500">
									You seem lost, i&apos;ll escort you back
									home.
								</p>
								<div className="mt-6">
									<Link
										href="#"
										className="text-base font-medium text-cu-red hover:text-cu-black-500"
									>
										Go back home
										<span aria-hidden="true"> &rarr;</span>
									</Link>
								</div>
							</div>
						</div>
					</main>
					<footer className="flex-shrink-0 bg-gray-50">
						<div className="w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
							<nav className="flex space-x-4">
								<Link
									href="#"
									className="text-sm font-medium text-gray-500 hover:text-gray-600"
								>
									Contact Support
								</Link>
								<span
									className="inline-block border-l border-gray-300"
									aria-hidden="true"
								/>
								<Link
									href="#"
									className="text-sm font-medium text-gray-500 hover:text-gray-600"
								>
									Status
								</Link>
							</nav>
						</div>
					</footer>
				</div>
				<div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
					<Image
						className="absolute inset-0 object-cover w-full h-full"
						src="/carleton-404.png"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default Error404;
