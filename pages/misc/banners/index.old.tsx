import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import GradientDiv from "../../../_rds-final/_misc/Gradient/GradientDiv";
import ImageDiv from "./_pieces/ImageDiv";
import RedWave from "./_pieces/RedWave";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<header className="relative bg-gradient-to-b from-white to-cu-black-100">
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Default Banner
					</h1>
					{/* <div className="flex flex-col gap-6 md:flex-row"> */}
					<div className="flex flex-wrap justify-center gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button Two"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
						<button
							type="button"
							aria-label="Button Three"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-black-600 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Three
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-gradient-to-b from-white to-cu-black-100">
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl sm:flex-row lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Default Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<div className="flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
					<h1 className="relative z-50 text-3xl font-medium text-white lg:text-4xl">
						Image Banner
					</h1>
					<div className="relative z-50 flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
					<ImageDiv />
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<div className="flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl sm:flex-row lg:py-16 lg:px-8">
					<h1 className="relative z-50 text-3xl font-medium text-white lg:text-4xl">
						Image Banner
					</h1>
					<div className="relative z-50 flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
					<ImageDiv />
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-gradient-to-b from-cu-red to-cu-red-900">
				<RedWave />
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl sm:flex-col lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-white lg:text-4xl">
						Red Waves Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-gradient-to-b from-cu-red to-cu-red-900">
				<RedWave />
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl sm:flex-row lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-white lg:text-4xl">
						Red Waves Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
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
						Gradient Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className="relative bg-cu-black-50">
				<GradientDiv />
				<div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl sm:flex-row lg:py-16 lg:px-8">
					<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
						Gradient Banner
					</h1>
					<div className="flex gap-6">
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Home;
