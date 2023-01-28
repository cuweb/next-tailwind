import { Column, Container } from "rds-tailwind";
import NewsListItem from "../_components/News/NewsListItem";

const styles = {
	oneColBorder: `[&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
	twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

export default function NewsListingContent() {
	return (
		<>
			<Container>
				<Column cols="1">
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<NewsListItem />
						</div>
					</div>

					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<NewsListItem />
							<NewsListItem />
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

					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<NewsListItem />
							<NewsListItem />
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
			</Container>
		</>
	);
}
