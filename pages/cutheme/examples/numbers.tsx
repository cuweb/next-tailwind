import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Column, Panel, StackedList } from "rds-tailwind";
import CuThemeNav from "../components/TopNav/TopNav";
import PeopleCard from "../components/People/PeopleCard";
import FooterSimple from "../components/FooterSimple/FooterSimple";
import NumberCard from "../components/Numbers/NumbersCard";
import NumberCardCenter from "../components/Numbers/NumberCardCenter";

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="cutheme numbers blocks" isType="dark-wave" />

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

					<h2>Grid Card Layouts</h2>

					<h3>Left Aligned in Two Columns with Max Width of 3xl</h3>

					<p>
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac
						etiam consequat in. Convallis arcu ipsum urna nibh.
						Pharetra, euismod vitae interdum mauris enim, consequat
						vulputate nibh. Maecenas pellentesque id sed tellus
						mauris, ultrices mauris. Tincidunt enim cursus ridiculus
						mi. Pellentesque nam sed nullam sed diam turpis ipsum eu
						a sed convallis diam.
					</p>

					<Column cols="2" maxWidth="3xl">
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
					</Column>

					<p>
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac
						etiam consequat in. Convallis arcu ipsum urna nibh.
						Pharetra, euismod vitae interdum mauris enim, consequat
						vulputate nibh. Maecenas pellentesque id sed tellus
						mauris, ultrices mauris. Tincidunt enim cursus ridiculus
						mi. Pellentesque nam sed nullam sed diam turpis ipsum eu
						a sed convallis diam.
					</p>

					<h3>Center Aligned in Two Columns with Max Width of 3xl</h3>

					<p>
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac
						etiam consequat in. Convallis arcu ipsum urna nibh.
						Pharetra, euismod vitae interdum mauris enim, consequat
						vulputate nibh. Maecenas pellentesque id sed tellus
						mauris, ultrices mauris. Tincidunt enim cursus ridiculus
						mi. Pellentesque nam sed nullam sed diam turpis ipsum eu
						a sed convallis diam.
					</p>

					<Column cols="2" maxWidth="3xl">
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
					</Column>

					<p>
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac
						etiam consequat in. Convallis arcu ipsum urna nibh.
						Pharetra, euismod vitae interdum mauris enim, consequat
						vulputate nibh. Maecenas pellentesque id sed tellus
						mauris, ultrices mauris. Tincidunt enim cursus ridiculus
						mi. Pellentesque nam sed nullam sed diam turpis ipsum eu
						a sed convallis diam.
					</p>

					<h3>Left Aligned in Three Columns with Max Width of 5xl</h3>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<Column cols="3" maxWidth="5xl">
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
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

					<h3>
						Center Aligned in Three Columns with Max Width of 5xl
					</h3>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<Column cols="3" maxWidth="5xl">
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
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

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<h3>
						Left Aligned in Four Columns with Default Max Width of
						7xl
					</h3>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<Column cols="4">
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
						<NumberCard />
					</Column>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<h3>
						Center Aligned in Four Columns with Default Max Width of
						7xl
					</h3>

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
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
						<NumberCardCenter />
					</Column>

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

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>
				</section>
			</main>

			<FooterSimple />
		</>
	);
};

export default CuTheme;
