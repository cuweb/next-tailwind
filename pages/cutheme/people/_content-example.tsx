import { Column, Container } from "rds-tailwind";
import PeopleCardShadow from "../_components/People/PeopleCard.Shadow";
import PeopleListItem from "../_components/People/PeopleListItem";
const styles = {
	oneColBorder: `[&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
	twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

export default function PeopleExample() {
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
				posuere, felis in scelerisque scelerisque, libero mauris cursus
				sem, ac aliquam sapien leo ut leo. In nec nibh ex. Cras sodales
				convallis libero, vitae interdum justo feugiat ac. Proin sapien
				erat, malesuada ac ullamcorper ac, rhoncus vel diam. Phasellus
				ullamcorper interdum lorem, at suscipit ante auctor non.
				Vestibulum imperdiet fermentum nibh, vitae feugiat enim.
				Maecenas consectetur vehicula turpis et molestie.
			</p>
			<Container>
				<h2 className="max-w-5xl mx-auto text-4xl font-semibold">
					President and CEO
				</h2>
				<Column cols="1">
					<PeopleCardShadow />
				</Column>

				<br />

				<h3 className="max-w-5xl mx-auto text-4xl font-semibold">
					Divisional Directors
				</h3>
				<Column cols="3">
					<PeopleCardShadow />
					<PeopleCardShadow />
					<PeopleCardShadow />
				</Column>
			</Container>
			<Container bgColor="grey">
				<h3 className="max-w-5xl mx-auto text-4xl font-semibold">
					Team Manager
				</h3>
				<Column>
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<PeopleListItem />
						</div>
					</div>
				</Column>

				<br />

				<h3 className="max-w-5xl mx-auto text-4xl font-semibold">
					Team Members
				</h3>
				<Column>
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
