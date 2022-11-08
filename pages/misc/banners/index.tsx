import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import GradientDiv from "../../../_rds-final/_misc/Gradient/GradientDiv";
import ImageDiv from "./_pieces/ImageDiv";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<header className="relative bg-cu-black-50">
				<div className="relative flex flex-row items-center justify-between px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Add to My Events"
							className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							<span className="mr-2"></span>
							Primary Button
						</button>
						<button
							type="button"
							aria-label="Register Now"
							className="inline-flex items-center justify-center px-4 py-3 font-medium bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
						>
							<span className="mr-2"></span>
							Secondary Button
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Add to My Events"
							className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							<span className="mr-2"></span>
							Add to My Events
						</button>
						<button
							type="button"
							aria-label="Register Now"
							className="inline-flex items-center justify-center px-4 py-3 font-medium bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
						>
							<span className="mr-2"></span>
							Register Now
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<GradientDiv />
				<div className="relative flex flex-row items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Add to My Events"
							className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							<span className="mr-2"></span>
							Add to My Events
						</button>
						<button
							type="button"
							aria-label="Register Now"
							className="inline-flex items-center justify-center px-4 py-3 font-medium bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
						>
							<span className="mr-2"></span>
							Register Now
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<GradientDiv />
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Add to My Events"
							className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							<span className="mr-2"></span>
							Add to My Events
						</button>
						<button
							type="button"
							aria-label="Register Now"
							className="inline-flex items-center justify-center px-4 py-3 font-medium bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
						>
							<span className="mr-2"></span>
							Register Now
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<ImageDiv />
				<div className="relative flex flex-row items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-white lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Add to My Events"
							className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							<span className="mr-2"></span>
							Add to My Events
						</button>
						<button
							type="button"
							aria-label="Register Now"
							className="inline-flex items-center justify-center px-4 py-3 font-medium bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
						>
							<span className="mr-2"></span>
							Register Now
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<ImageDiv />
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-white lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Add to My Events"
							className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							<span className="mr-2"></span>
							Add to My Events
						</button>
						<button
							type="button"
							aria-label="Register Now"
							className="inline-flex items-center justify-center px-4 py-3 font-medium bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
						>
							<span className="mr-2"></span>
							Register Now
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Home;
