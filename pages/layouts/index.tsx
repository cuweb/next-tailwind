import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/FooterStandard";
import Container from "../../layout/Container/Container";
import Columns from "../../layout/Columns/Columns";
import PagePanel from "./components/_panel";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header className="max-w-4xl px-8 py-12 mx-auto">
				<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
					Grids &amp; Layouts
				</h1>
			</header>

			<main>
				{/* <Container bgColor="gray">
					<Columns maxWidth="4xl">
						<PagePanel>
							<ul>
								<li>
									<a
										className="text-cu-red hover:text-cyan-700"
										href="layouts/examples/columns1"
									>
										Columns 1
									</a>
								</li>
								<li>
									<a
										className="text-cu-red hover:text-cyan-700"
										href="layouts/examples/columns2"
									>
										Columns 2
									</a>
								</li>
								<li>
									<a
										className="text-cu-red hover:text-cyan-700"
										href="layouts/examples/columns3"
									>
										Columns 3
									</a>
								</li>
								<li>
									<a
										className="text-cu-red hover:text-cyan-700"
										href="layouts/examples/columns33"
									>
										Columns One Third
									</a>
								</li>
								<li>
									<a
										className="text-cu-red hover:text-cyan-700"
										href="layouts/examples/columns66"
									>
										Columns Two Third
									</a>
								</li>
								<li>
									<a
										className="text-cu-red hover:text-cyan-700"
										href="layouts/examples/no-container"
									>
										No Container Wrapper
									</a>
								</li>
							</ul>
						</PagePanel>
					</Columns>
				</Container> */}

				<Container>
					<div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
						<PagePanel />
						<PagePanel />
						<PagePanel />
					</div>
				</Container>

				<Container bgColor="gray">
					<Columns
						columns="grid-cols-2"
						breakPoint="md"
						maxWidth="4xl"
					>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns
						columns="grid-cols-2"
						breakPoint="sm"
						maxWidth="7xl"
					>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns
						columns="grid-cols-3"
						breakPoint="md"
						maxWidth="4xl"
					>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns
						columns="grid-cols-3"
						breakPoint="sm"
						maxWidth="7xl"
					>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				{/* <Container>
					<Columns>
						<PagePanel />
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns columns="grid-cols-1" maxWidth="4xl">
						<PagePanel />
					</Columns>
				</Container>

				<Container bgColor="white">
					<Columns columns="grid-cols-2" maxWidth="4xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="white">
					<Columns columns="grid-cols-2" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns columns="grid-cols-3" maxWidth="4xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="white">
					<Columns columns="grid-cols-one3rd" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="white">
					<Columns columns="grid-cols-one3rd" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>

				<Container bgColor="gray">
					<Columns columns="grid-cols-two3rd" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container>
				<Container bgColor="gray">
					<Columns columns="grid-cols-two3rd" maxWidth="7xl">
						<div>
							<PagePanel />
						</div>
						<div>
							<PagePanel />
						</div>
					</Columns>
				</Container> */}
			</main>

			<Footer />
		</>
	);
};

export default PageLayout;
