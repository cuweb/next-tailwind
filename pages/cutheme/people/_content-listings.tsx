import { Column, Container } from "rds-tailwind";
import PeopleListItem from "../_components/People/PeopleListItem";

const styles = {
	oneColBorder: `[&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
	twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

export default function PeopleListingContent() {
	return (
		<>
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
		</>
	);
}
