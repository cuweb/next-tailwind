import type { NextPage } from "next";
import Head from "next/head";
import {
	Container,
	Column,
	Banner,
	FooterBasic,
	TopNav,
	Main,
	Aside,
	StackedList,
	EventCard,
	NewsItem,
	EventItem,
	MarketplaceItem,
	FileItem,
	FeedItem,
} from "rds-tailwind";
import UserDetails from "../../components/UserDetails/UserDetails";
// import Quicklinks from "../../components/QuickLinks/QuickLinks";
import EventData from "../../component-data/EventData";
import NewsData from "../../component-data/NewsData";
// import MarketplaceData from "./data/MarketplaceData";
import FileData from "../../component-data/FileData";
import FeedData from "../../component-data/FeedData";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard - Intranet | Carleton University </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<style>{`
                main { margin-top: -208px !important; }
                aside { margin-top: 208px; }
                aside h3 { margin-top: 0 !important; }
            `}</style>

			<TopNav title="Carleton Intranet" />
			<Banner align="left" isType="red-wave" maxWidth="7xl" hasOverlap />

			<Main>
				<Container maxWidth="7xl" hasProse>
					<Column cols="2/3" maxWidth="7xl">
						<div>
							<UserDetails />
							{/* <Quicklinks /> */}

							<h2>Upcoming Events</h2>

							<Column cols="2">
								{EventData.map(
									({
										id,
										link,
										title,
										start_date,
										end_date,
										event_address,
										on_campus,
										tags,
									}) => (
										<EventCard
											key={id}
											title={title}
											link={link}
											startDateTime={start_date}
											endDateTime={end_date}
											eventAddress={event_address}
											onCampus={on_campus}
											tags={tags}
										/>
									)
								)}
							</Column>

							<StackedList cols="2" hasShadow>
								{EventData.map(
									({
										id,
										link,
										title,
										start_date,
										end_date,
										event_address,
										on_campus,
										tags,
										on_campus_building,
										on_campus_room_number,
									}) => (
										<EventItem
											key={id}
											as="li"
											link={link}
											title={title}
											startDateTime={start_date}
											endDateTime={end_date}
											event_address={event_address}
											on_campus={on_campus}
											on_campus_building={
												on_campus_building
											}
											on_campus_room_number={
												on_campus_room_number
											}
											tags={tags}
										/>
									)
								)}
							</StackedList>

							<h2>Your News Feed</h2>

							<StackedList hasShadow>
								<NewsItem
									image={NewsData[0].image}
									alt="Image alt tag"
									title={NewsData[0].title}
									link={NewsData[0].url}
									date={NewsData[0].date}
									excerpt={NewsData[0].excerpt}
								/>
							</StackedList>

							<StackedList cols="2" hasShadow>
								{NewsData.map(
									({
										id,
										title,
										url,
										image,
										date,
										excerpt,
									}) => (
										<NewsItem
											key={id}
											image={image}
											alt="Image alt tag"
											title={title}
											link={url}
											date={date}
											excerpt={excerpt}
										/>
									)
								)}
							</StackedList>
						</div>

						<Aside>
							<StackedList header="Key Announcements">
								{FeedData.map(
									({
										id,
										title,
										link,
										date,
										excerpt,
										category,
									}) => (
										<FeedItem key={id} link={link}>
											<FeedItem.Content>
												<FeedItem.Title title={title} />
												<FeedItem.Date date={date} />
												<FeedItem.Excerpt
													excerpt={excerpt}
												/>
												<FeedItem.Category
													category={category}
												/>
											</FeedItem.Content>
										</FeedItem>
									)
								)}
							</StackedList>

							<StackedList header="Human Resources">
								{FileData.map(
									({ id, title, link, filesize, date }) => (
										<FileItem key={id} link={link} as="div">
											<FileItem.Content>
												<FileItem.Title title={title} />
												<FileItem.Details
													filesize={filesize}
													date={date}
												/>
											</FileItem.Content>
										</FileItem>
									)
								)}
							</StackedList>
						</Aside>
					</Column>
				</Container>
			</Main>

			<FooterBasic />
		</>
	);
};

export default PageLayout;
