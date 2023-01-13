import type { NextPage } from "next";
import Head from "next/head";
import { FooterStandard, Banner, Column } from "rds-tailwind";
import CuThemeNav from "../components/TopNav/TopNav";
import FocusNav from "../components/FocusNav/FocusNav";
import NewsCard from "../components/News/NewsCard";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FocusNav />
			<CuThemeNav />
			<Banner title="cutheme news blocks" />

			<main className="mx-10">
				<section className="prose prose-cutheme cutheme-spacing max-w-none lg:prose-lg">
					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Column cols="2" maxWidth="3xl">
						<NewsCard />
						<NewsCard />
					</Column>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit. Quis
						semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Column cols="3" maxWidth="5xl">
						<NewsCard />
						<NewsCard />
						<NewsCard />
					</Column>

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

					<Column cols="4">
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
					</Column>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<p>
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac
						etiam consequat in. Convallis arcu ipsum urna nibh.
						Pharetra, euismod vitae interdum mauris enim, consequat
						vulputate nibh. Maecenas pellentesque id sed tellus
						mauris, ultrices mauris. Tincidunt enim cursus ridiculus
						mi. Pellentesque nam sed nullam sed diam turpis ipsum eu
						a sed convallis diam.
					</p>
				</section>
			</main>

			<FooterStandard />
		</>
	);
};

export default CuTheme;
