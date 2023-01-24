import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "rds-tailwind";
import FooterSimple from "../components/FooterSimple/FooterSimple";
import NewsCard from "../components/News/NewsCard";
import CuThemeNav from "../components/TopNav/TopNav";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="content @ 4xl (896px)" />

			<main className="mx-10">
				<section className="prose prose-cutheme cutheme-spacing cutheme-spacing--4xl max-w-none md:prose-xl">
					<h2>H2 Heading</h2>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<ul>
						<li>Quis elit egestas venenatis mattis dignissim.</li>
						<li>
							Cras cras lobortis vitae vivamus ultricies facilisis
							tempus.
						</li>
						<li>
							Orci in sit morbi dignissim metus diam arcu pretium.
						</li>
					</ul>

					<h3>H3 Heading</h3>

					<p>
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac
						etiam consequat in. Convallis arcu ipsum urna nibh.
						Pharetra, euismod vitae interdum mauris enim, consequat
						vulputate nibh. Maecenas pellentesque id sed tellus
						mauris, ultrices mauris. Tincidunt enim cursus ridiculus
						mi. Pellentesque nam sed nullam sed diam turpis ipsum eu
						a sed convallis diam.
					</p>

					<blockquote>
						<p>
							Sagittis scelerisque nulla cursus in enim
							consectetur quam. Dictum urna sed consectetur neque
							tristique pellentesque. Blandit amet, sed aenean
							erat arcu morbi.
						</p>
					</blockquote>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<h4>H4 Heading</h4>

					<p>
						Purus morbi dignissim senectus mattis{" "}
						<a href="#">adipiscing</a>. Amet, massa quam varius orci
						dapibus volutpat cras. In amet eu ridiculus leo sodales
						cursus tristique. Tincidunt sed tempus ut viverra
						ridiculus non molestie. Gravida quis fringilla amet eget
						dui tempor dignissim. Facilisis auctor venenatis varius
						nunc, congue erat ac. Cras fermentum convallis quam.
					</p>

					<div className="cu-column mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 [&:last-child]:mb-0 [&+.cu-column]:mt-8">
						<NewsCard />
						<NewsCard />
					</div>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<div className="cu-column mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 [&:last-child]:mb-0 [&+.cu-column]:mt-8">
						<NewsCard />
						<NewsCard />
						<NewsCard />
					</div>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<div className="cu-column mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 [&:last-child]:mb-0 [&+.cu-column]:mt-8">
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
					</div>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<ol>
						<li>Quis elit egestas venenatis mattis dignissim.</li>
						<li>
							Cras cras lobortis vitae vivamus ultricies facilisis
							tempus.
						</li>
						<li>
							Orci in sit morbi dignissim metus diam arcu pretium.
						</li>
					</ol>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<p>
						Aliquet nec orci mattis amet quisque ullamcorper neque,
						nibh sem. At arcu, sit dui mi, nibh dui, diam eget
						aliquam. Quisque id at vitae feugiat egestas ac. Diam
						nulla orci at in viverra scelerisque eget. Eleifend
						egestas fringilla sapien.
					</p>
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
