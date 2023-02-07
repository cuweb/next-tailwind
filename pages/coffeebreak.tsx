import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Column, Container } from "rds-tailwind";
import NewsCard from "./cutheme/_components/News/NewsCard";
import NewsListItem from "./cutheme/_components/News/NewsListItem";
import EventCard from "./cutheme/_components/Events/EventCard";
import EventListItem from "./cutheme/_components/Events/EventListItem";
import PeopleCard from "./cutheme/_components/People/PeopleCard";
import PeopleListItem from "./cutheme/_components/People/PeopleListItem";
import VideoCard from "./cutheme/_components/Videos/VideoCard";
import CuThemeNav from "./cutheme/_components/TopNav/TopNav";
import EventListItemAlt from "./cutheme/_components/Events/EventListItemAlt";
import PeopleListItemAlt from "./cutheme/_components/People/PeopleListItemAlt";

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
			<Banner title="February Coffee Break 2023" isType="dark-wave" />

			<main className="mx-10">
				<section className="prose prose-lg prose-cutheme cutheme-spacing max-w-none md:prose-xl">
					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<h2>News Block Prototypes</h2>

					<h3>News Grid Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="2">
							<NewsCard />
							<NewsCard />
						</Column>
					</Container>
					<Container>
						<Column cols="3">
							<NewsCard />
							<NewsCard />
							<NewsCard />
						</Column>
					</Container>
					<Container>
						<Column cols="4" maxWidth="7xl">
							<NewsCard />
							<NewsCard />
							<NewsCard />
							<NewsCard />
						</Column>
					</Container>

					<Container bgColor="grey">
						<Column cols="2">
							<NewsCard />
							<NewsCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="3">
							<NewsCard />
							<NewsCard />
							<NewsCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="4" maxWidth="7xl">
							<NewsCard />
							<NewsCard />
							<NewsCard />
							<NewsCard />
						</Column>
					</Container>

					<h3 className="pt-10">News Listing Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<NewsListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<NewsListItem />
									<NewsListItem />
									<NewsListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
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
					</Container>

					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<NewsListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<NewsListItem />
									<NewsListItem />
									<NewsListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
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
					</Container>

					<h2 className="pt-10">Event Block Prototypes</h2>

					<h3>Event Grid Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="2">
							<EventCard />
							<EventCard />
						</Column>
					</Container>
					<Container>
						<Column cols="3">
							<EventCard />
							<EventCard />
							<EventCard />
						</Column>
					</Container>
					<Container>
						<Column cols="4" maxWidth="7xl">
							<EventCard />
							<EventCard />
							<EventCard />
							<EventCard />
						</Column>
					</Container>

					<Container bgColor="grey">
						<Column cols="2">
							<EventCard />
							<EventCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="3">
							<EventCard />
							<EventCard />
							<EventCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="4" maxWidth="7xl">
							<EventCard />
							<EventCard />
							<EventCard />
							<EventCard />
						</Column>
					</Container>

					<h3 className="pt-10">Event Listing Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<EventListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<EventListItem />
									<EventListItem />
									<EventListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<EventListItem />
									<EventListItem />
									<EventListItem />
									<EventListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<EventListItemAlt />
									<EventListItemAlt />
									<EventListItemAlt />
									<EventListItemAlt />
								</div>
							</div>
						</Column>
					</Container>

					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<EventListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<EventListItem />
									<EventListItem />
									<EventListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<EventListItem />
									<EventListItem />
									<EventListItem />
									<EventListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<EventListItemAlt />
									<EventListItemAlt />
									<EventListItemAlt />
									<EventListItemAlt />
								</div>
							</div>
						</Column>
					</Container>

					<h2 className="pt-10">People Block Prototypes</h2>

					<h3>People Grid Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="2">
							<PeopleCard />
							<PeopleCard />
						</Column>
					</Container>
					<Container>
						<Column cols="3">
							<PeopleCard />
							<PeopleCard />
							<PeopleCard />
						</Column>
					</Container>
					<Container>
						<Column cols="4" maxWidth="7xl">
							<PeopleCard />
							<PeopleCard />
							<PeopleCard />
							<PeopleCard />
						</Column>
					</Container>

					<Container bgColor="grey">
						<Column cols="2">
							<PeopleCard />
							<PeopleCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="3">
							<PeopleCard />
							<PeopleCard />
							<PeopleCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="4" maxWidth="7xl">
							<PeopleCard />
							<PeopleCard />
							<PeopleCard />
							<PeopleCard />
						</Column>
					</Container>

					<h3 className="pt-10">People Listing Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<PeopleListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<PeopleListItem />
									<PeopleListItem />
									<PeopleListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container>
						<Column cols="1">
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
					</Container>
					<Container>
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<PeopleListItemAlt />
									<PeopleListItemAlt />
									<PeopleListItemAlt />
									<PeopleListItemAlt />
								</div>
							</div>
						</Column>
					</Container>

					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<PeopleListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
								>
									<PeopleListItem />
									<PeopleListItem />
									<PeopleListItem />
								</div>
							</div>
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
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
					</Container>
					<Container bgColor="grey">
						<Column cols="1">
							<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
								<div
									className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
								>
									<PeopleListItemAlt />
									<PeopleListItemAlt />
									<PeopleListItemAlt />
									<PeopleListItemAlt />
								</div>
							</div>
						</Column>
					</Container>

					<h2 className="pt-10">Video Block Prototypes</h2>

					<h3>Video Grid Layouts</h3>

					<p>
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida eu. Tincidunt leo, elementum
						mattis elementum ut nisl, justo, amet, mattis. Nunc
						purus, diam commodo tincidunt turpis. Amet, duis sed
						elit interdum dignissim.
					</p>

					<Container>
						<Column cols="2">
							<VideoCard />
							<VideoCard />
						</Column>
					</Container>
					<Container>
						<Column cols="3">
							<VideoCard />
							<VideoCard />
							<VideoCard />
						</Column>
					</Container>
					<Container>
						<Column cols="4" maxWidth="7xl">
							<VideoCard />
							<VideoCard />
							<VideoCard />
							<VideoCard />
						</Column>
					</Container>

					<Container bgColor="grey">
						<Column cols="2">
							<VideoCard />
							<VideoCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="3">
							<VideoCard />
							<VideoCard />
							<VideoCard />
						</Column>
					</Container>
					<Container bgColor="grey">
						<Column cols="4" maxWidth="7xl">
							<VideoCard />
							<VideoCard />
							<VideoCard />
							<VideoCard />
						</Column>
					</Container>
				</section>
			</main>
		</>
	);
};

export default CuTheme;
