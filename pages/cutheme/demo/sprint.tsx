import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Column, Container } from "rds-tailwind";
import FooterSimple from "../_components/FooterSimple/FooterSimple";
import CuThemeNav from "../_components/TopNav/TopNav";
import NewsCard from "../_components/News/NewsCard";
import EventCard from "../_components/Events/EventCard";
import NewsListItem from "../_components/News/NewsListItem";
import NumberCard from "../_components/Numbers/NumbersCard";
import PeopleListItem from "../_components/People/PeopleListItem";
import VideoCard from "../_components/Videos/VideoCard";

const styles = {
	oneColBorder: `[&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
	twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
	container: `cu-container not-prose px-10 pt-0 pb-8 [&.bg-cu-black-50+.cu-container.bg-cu-black-50]:pt-0 [&.bg-transparent+.cu-container.bg-transparent]:pt-0 bg-transparent`,
};

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CuThemeNav />
			<Banner title="Web Services Sprint Demo" isType="dark-wave" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cutheme-spacing max-w-none md:prose-xl">
					<h2>RDS Component Prototypes</h2>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<h3>Event Grid</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<div className={`${styles.container}`}>
						<Column cols="2">
							<EventCard />
							<EventCard />
						</Column>
						<Column cols="3">
							<EventCard />
							<EventCard />
							<EventCard />
						</Column>
					</div>

					<h3>News Grid</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<div className={`${styles.container}`}>
						<Column cols="2">
							<NewsCard />
							<NewsCard />
						</Column>
						<Column cols="3">
							<NewsCard />
							<NewsCard />
							<NewsCard />
						</Column>
					</div>

					<h3>News Listing</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<div className={`${styles.container}`}>
						<Column cols="1" gridGap="0">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<NewsListItem />
								</div>
							</div>

							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<NewsListItem />
									<NewsListItem />
									<NewsListItem />
									<NewsListItem />
								</div>
							</div>
						</Column>
					</div>

					<h3>Numbers Grid</h3>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
						Maecenas pellentesque id sed tellus mauris, ultrices
						mauris. Tincidunt enim cursus ridiculus mi. Pellentesque
						nam sed nullam sed diam turpis ipsum eu a sed convallis
						diam.
					</p>

					<div className={`${styles.container}`}>
						<Column cols="2">
							<NumberCard />
							<NumberCard />
						</Column>
						<Column cols="3">
							<NumberCard />
							<NumberCard />
							<NumberCard />
						</Column>
					</div>

					<h3>People Listing</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<div className={`${styles.container}`}>
						<Column cols="1" gridGap="0">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<PeopleListItem />
								</div>
							</div>

							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<PeopleListItem />
									<PeopleListItem />
									<PeopleListItem />
									<PeopleListItem />
								</div>
							</div>
						</Column>
					</div>

					<h3>Video Grid</h3>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
						Maecenas pellentesque id sed tellus mauris, ultrices
						mauris. Tincidunt enim cursus ridiculus mi. Pellentesque
						nam sed nullam sed diam turpis ipsum eu a sed convallis
						diam.
					</p>

					<div className={`${styles.container}`}>
						<Column cols="2">
							<VideoCard />
							<VideoCard />
						</Column>
						<Column cols="3">
							<VideoCard />
							<VideoCard />
							<VideoCard />
						</Column>
					</div>

					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae sed
						turpis id. Id dolor praesent donec est. Odio penatibus
						risus viverra tellus varius sit neque erat velit.
					</p>

					<p>
						Purus morbi dignissim senectus mattis. Amet, massa quam
						varius orci dapibus volutpat cras. In amet eu ridiculus
						leo sodales cursus tristique. Tincidunt sed tempus ut
						viverra ridiculus non molestie. Gravida quis fringilla
						amet eget dui tempor dignissim. Facilisis auctor
						venenatis varius nunc, congue erat ac. Cras fermentum
						convallis quam.
					</p>

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
