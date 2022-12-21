import type { NextPage } from "next";
import Head from "next/head";
import { TopNav, FooterBasic, Banner } from "rds-tailwind";
import CardGridEvents from "./components/CardGridEvents";
import ListItemsNews from "./components/ListItemsNews";
import SideNavLight from "./components/SideNavLight";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav
				logoUrl="https://carleton.ca/"
				title="WordPress ¯\_(ツ)_/¯"
			/>

			<Banner
				//   align="horizontal"
				isType="dark-wave"
				title="Welcome to cutheme 2.0"
			/>

			<main className="px-8">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-sidenav [&:last-child]:mb-0">
					<nav className="relative hidden py-14 shadow-sidenav lg:block">
						<SideNavLight />
					</nav>

					<section className="py-14">
						<article className="prose prose-cutheme max-w-none lg:prose-lg">
							<h2>Prose in cutheme</h2>
							<p>
								Aliquet nec orci mattis amet quisque ullamcorper
								neque, nibh sem. At arcu, sit dui mi, nibh dui,
								diam eget aliquam. Quisque id at vitae feugiat
								egestas ac. Diam nulla orci at in viverra
								scelerisque eget. Eleifend egestas fringilla
								sapien.
							</p>

							<div className="flex gap-8 not-prose">
								<p className="flex-1">
									Quisque id at vitae feugiat egestas ac. Diam
									nulla <a href="#">orci at in viverra</a>{" "}
									scelerisque eget.
								</p>
								<p className="flex-1">
									Id dolor praesent donec est. Odio penatibus
									risus viverra tellus varius sit neque.
								</p>
							</div>

							<p>
								Faucibus commodo massa rhoncus, volutpat.{" "}
								<strong>Dignissim</strong> sed{" "}
								<strong>eget risus enim</strong>. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit. Faucibus
								commodo massa rhoncus, volutpat. Dignissim sed
								eget risus enim.{" "}
								<a href="#">Mattis mauris semper</a> sed amet
								vitae sed turpis id.
							</p>

							<ListItemsNews />

							<p>
								Faucibus commodo massa rhoncus, volutpat.{" "}
								<strong>Dignissim</strong> sed{" "}
								<strong>eget risus enim</strong>. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit. Faucibus
								commodo massa rhoncus, volutpat. Dignissim sed
								eget risus enim.{" "}
								<a href="#">Mattis mauris semper</a> sed amet
								vitae sed turpis id.
							</p>

							<p>
								Id orci tellus laoreet id ac. Dolor, aenean leo,
								ac etiam consequat in. Convallis arcu ipsum urna
								nibh. Pharetra, euismod vitae interdum mauris
								enim, consequat vulputate nibh. Maecenas
								pellentesque id sed tellus mauris, ultrices
								mauris. Tincidunt enim cursus ridiculus mi.
								Pellentesque nam sed nullam sed diam turpis
								ipsum eu a sed convallis diam.
							</p>

							<CardGridEvents />

							<p>
								Faucibus commodo massa rhoncus, volutpat.{" "}
								<strong>Dignissim</strong> sed{" "}
								<strong>eget risus enim</strong>. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit. Faucibus
								commodo massa rhoncus, volutpat. Dignissim sed
								eget risus enim.{" "}
								<a href="#">Mattis mauris semper</a> sed amet
								vitae sed turpis id.
							</p>

							<p>
								Quis semper vulputate aliquam venenatis egestas
								sagittis quisque orci. Donec commodo sit viverra
								aliquam porttitor ultrices gravida eu. Tincidunt
								leo, elementum mattis elementum ut nisl, justo,
								amet, mattis. Nunc purus, diam commodo tincidunt
								turpis. Amet, duis sed elit interdum dignissim.
							</p>

							<ul>
								<li>
									Quis elit egestas venenatis mattis
									dignissim.
								</li>
								<li>
									Cras cras lobortis vitae vivamus ultricies
									facilisis tempus.
								</li>
								<li>
									Orci in sit morbi dignissim metus diam arcu
									pretium.
								</li>
							</ul>

							<h3>H3 Heading</h3>

							<p>
								Id orci tellus laoreet id ac. Dolor, aenean leo,
								ac etiam consequat in. Convallis arcu ipsum urna
								nibh. Pharetra, euismod vitae interdum mauris
								enim, consequat vulputate nibh. Maecenas
								pellentesque id sed tellus mauris, ultrices
								mauris. Tincidunt enim cursus ridiculus mi.
								Pellentesque nam sed nullam sed diam turpis
								ipsum eu a sed convallis diam.
							</p>

							<blockquote>
								<p>
									Sagittis scelerisque nulla cursus in enim
									consectetur quam. Dictum urna sed
									consectetur neque tristique pellentesque.
									Blandit amet, sed aenean erat arcu morbi.
								</p>
							</blockquote>
							<p>
								Faucibus commodo massa rhoncus, volutpat.
								Dignissim sed eget risus enim. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit.
							</p>

							<h4>H4 Heading</h4>
							<p>
								Purus morbi dignissim senectus mattis{" "}
								<a href="#">adipiscing</a>. Amet, massa quam
								varius orci dapibus volutpat cras. In amet eu
								ridiculus leo sodales cursus tristique.
								Tincidunt sed tempus ut viverra ridiculus non
								molestie. Gravida quis fringilla amet eget dui
								tempor dignissim. Facilisis auctor venenatis
								varius nunc, congue erat ac. Cras fermentum
								convallis quam.
							</p>

							<p>
								Faucibus commodo massa rhoncus, volutpat.
								Dignissim sed eget risus enim. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit.
							</p>

							<ol>
								<li>
									Quis elit egestas venenatis mattis
									dignissim.
								</li>
								<li>
									Cras cras lobortis vitae vivamus ultricies
									facilisis tempus.
								</li>
								<li>
									Orci in sit morbi dignissim metus diam arcu
									pretium.
								</li>
							</ol>

							<p>
								Faucibus commodo massa rhoncus, volutpat.
								Dignissim sed eget risus enim. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit.
							</p>
						</article>
					</section>
				</div>
			</main>

			<FooterBasic />
		</>
	);
};

export default CuTheme;
