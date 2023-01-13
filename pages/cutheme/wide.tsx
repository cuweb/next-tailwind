import type { NextPage } from "next";
import Head from "next/head";
import { FooterStandard, Banner, Container, Column } from "rds-tailwind";
import CuThemeNav from "./components/TopNav/TopNav";
import FocusNav from "./components/FocusNav/FocusNav";
import CuThemeContent from "./components-old/Content/Content";

const styles = {
	gutenbergWidth: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
	gutenbergFirst: `first:[&>:not(.cu-container):not(.cu-column)]:mt-12`,
	gutenbergLast: `last:[&>:not(.cu-container):not(.cu-column)]:mb-16`,
};

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FocusNav />
			<CuThemeNav />
			<Banner title="Basic Banner" />
			{/* <Banner isType="dark-wave" title="cutheme prototypes" /> */}

			<main>
				<section
					className={`prose-cutheme prose max-w-none lg:prose-lg ${styles.gutenbergWidth} ${styles.gutenbergFirst} ${styles.gutenbergLast}`}
				>
					<h2 className="">H2 Heading</h2>

					<p className="bg-slate-200">
						Purus morbi dignissim senectus mattis adipiscing. Amet,
						massa quam varius orci dapibus volutpat cras. In amet eu
						ridiculus leo sodales cursus tristique. Tincidunt sed
						tempus ut viverra ridiculus non molestie. Gravida quis
						fringilla amet eget dui tempor dignissim. Facilisis
						auctor venenatis varius nunc, congue erat ac. Cras
						fermentum convallis quam.
					</p>

					<Column cols="2">
						<p className="bg-slate-200">
							Purus morbi dignissim senectus mattis adipiscing.
							Amet, massa quam varius orci dapibus volutpat cras.
							In amet eu ridiculus leo sodales cursus tristique.
							Tincidunt sed tempus ut viverra ridiculus non
							molestie. Gravida quis fringilla amet eget dui
							tempor dignissim. Facilisis auctor venenatis varius
							nunc, congue erat ac. Cras fermentum convallis quam.
						</p>
						<p className="bg-slate-200">
							Purus morbi dignissim senectus mattis adipiscing.
							Amet, massa quam varius orci dapibus volutpat cras.
							In amet eu ridiculus leo sodales cursus tristique.
							Tincidunt sed tempus ut viverra ridiculus non
							molestie. Gravida quis fringilla amet eget dui
							tempor dignissim. Facilisis auctor venenatis varius
							nunc, congue erat ac. Cras fermentum convallis quam.
						</p>
					</Column>

					<div className="cu-container">
						<p>
							Purus morbi dignissim senectus mattis adipiscing.
							Amet, massa quam varius orci dapibus volutpat cras.
							In amet eu ridiculus leo sodales cursus tristique.
							Tincidunt sed tempus ut viverra ridiculus non
							molestie. Gravida quis fringilla amet eget dui
							tempor dignissim. Facilisis auctor venenatis varius
							nunc, congue erat ac. Cras fermentum convallis quam.
						</p>
					</div>

					<p>
						Purus morbi dignissim senectus mattis adipiscing. Amet,
						massa quam varius orci dapibus volutpat cras. In amet eu
						ridiculus leo sodales cursus tristique. Tincidunt sed
						tempus ut viverra ridiculus non molestie. Gravida quis
						fringilla amet eget dui tempor dignissim. Facilisis
						auctor venenatis varius nunc, congue erat ac. Cras
						fermentum convallis quam.
					</p>

					<div className="bg-green-700 test">
						<p>
							Purus morbi dignissim senectus mattis adipiscing.
							Amet, massa quam varius orci dapibus volutpat cras.
							In amet eu ridiculus leo sodales cursus tristique.
							Tincidunt sed tempus ut viverra ridiculus non
							molestie. Gravida quis fringilla amet eget dui
							tempor dignissim. Facilisis auctor venenatis varius
							nunc, congue erat ac. Cras fermentum convallis quam.
						</p>
					</div>

					<p>
						Purus morbi dignissim senectus mattis adipiscing. Amet,
						massa quam varius orci dapibus volutpat cras. In amet eu
						ridiculus leo sodales cursus tristique. Tincidunt sed
						tempus ut viverra ridiculus non molestie. Gravida quis
						fringilla amet eget dui tempor dignissim. Facilisis
						auctor venenatis varius nunc, congue erat ac. Cras
						fermentum convallis quam.
					</p>

					<Container bgColor="grey">
						<p>
							Purus morbi dignissim senectus mattis adipiscing.
							Amet, massa quam varius orci dapibus volutpat cras.
							In amet eu ridiculus leo sodales cursus tristique.
							Tincidunt sed tempus ut viverra ridiculus non
							molestie. Gravida quis fringilla amet eget dui
							tempor dignissim. Facilisis auctor venenatis varius
							nunc, congue erat ac. Cras fermentum convallis quam.
						</p>
					</Container>

					<div className="cu-container">
						<Column cols="3">
							<p className="bg-slate-200">
								Purus morbi dignissim senectus mattis
								adipiscing. Amet, massa quam varius orci dapibus
								volutpat cras. In amet eu ridiculus leo sodales
								cursus tristique. Tincidunt sed tempus ut
								viverra ridiculus non molestie. Gravida quis
								fringilla amet eget dui tempor dignissim.
								Facilisis auctor venenatis varius nunc, congue
								erat ac. Cras fermentum convallis quam.
							</p>
							<p className="bg-slate-200">
								Purus morbi dignissim senectus mattis
								adipiscing. Amet, massa quam varius orci dapibus
								volutpat cras. In amet eu ridiculus leo sodales
								cursus tristique. Tincidunt sed tempus ut
								viverra ridiculus non molestie. Gravida quis
								fringilla amet eget dui tempor dignissim.
								Facilisis auctor venenatis varius nunc, congue
								erat ac. Cras fermentum convallis quam.
							</p>
							<p className="bg-slate-200">
								Purus morbi dignissim senectus mattis
								adipiscing. Amet, massa quam varius orci dapibus
								volutpat cras. In amet eu ridiculus leo sodales
								cursus tristique. Tincidunt sed tempus ut
								viverra ridiculus non molestie. Gravida quis
								fringilla amet eget dui tempor dignissim.
								Facilisis auctor venenatis varius nunc, congue
								erat ac. Cras fermentum convallis quam.
							</p>
						</Column>
					</div>

					<p className="bg-slate-200">
						Purus morbi dignissim senectus mattis adipiscing. Amet,
						massa quam varius orci dapibus volutpat cras. In amet eu
						ridiculus leo sodales cursus tristique. Tincidunt sed
						tempus ut viverra ridiculus non molestie. Gravida quis
						fringilla amet eget dui tempor dignissim. Facilisis
						auctor venenatis varius nunc, congue erat ac. Cras
						fermentum convallis quam.
					</p>

					<CuThemeContent />
				</section>
			</main>

			{/* <br />
			<br />

			<main>
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<SideNavLight />

					<section className="py-14">
						<article className="prose prose-cutheme max-w-none lg:prose-lg">
							<CuThemeContent />
						</article>
					</section>
				</div>
			</main> */}

			<FooterStandard />
		</>
	);
};

export default CuTheme;
