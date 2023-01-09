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
			<div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
				<main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex justify-center flex-shrink-0">
						<Link href="/" className="inline-flex">
							<span className="sr-only">Carleton University</span>
							<Image
								className="w-auto h-12"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</Link>
					</div>
					<div className="py-16">
						<div className="text-center">
							<p className="text-base font-semibold text-cu-red">
								404
							</p>
							<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
								Page not found.
							</h1>
							<p className="mt-2 text-base text-gray-500">
								Sorry, we couldn’t find the page you’re looking
								for.
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
				<footer className="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<nav className="flex justify-center space-x-4">
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
						<span
							className="inline-block border-gray-300"
							aria-hidden="true"
						/>
					</nav>
				</footer>
			</div>
		</>
	);
};

export default Error404;
