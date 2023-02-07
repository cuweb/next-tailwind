import { Container, Column } from "rds-tailwind";

import EventListItem from "../_components/Events/EventListItem";
import EventListItemBackup from "../_components/Events/EventListItem.Backup";

const styles = {
	oneColBorder: `[&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
	twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

export default function EventListingContent() {
	return (
		<>
			<Container>
				<Column cols="1">
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-4">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<EventListItem />
						</div>
					</div>

					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-4">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<EventListItem />
							<EventListItem />
							<EventListItem />
						</div>
					</div>

					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-4">
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
				<Column cols="2/3">
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-4">
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
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-4">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<EventListItem />
						</div>
					</div>

					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-4">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<EventListItem />
							<EventListItem />
							<EventListItem />
						</div>
					</div>

					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-4">
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
				<Column cols="2/3">
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-4">
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
		</>
	);
}
