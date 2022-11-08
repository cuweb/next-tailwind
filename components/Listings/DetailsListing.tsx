import StackedList from "../../_rds-final/layouts/StackedList/StackedList";
import DetailsItem from "../../_rds-final/components/ListingItem/DetailsItem/DetailsItem";
import Panel from "../../_rds-final/layouts/Panel/Panel";

import {
	MapPinIcon,
	CalendarDaysIcon,
	ChatBubbleBottomCenterTextIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const details = [
	{
		title: "405 Robertson Hall",
		description: "1125 Colonel By Drive, Ottawa, ON, K1A 4A4",
		icon: MapPinIcon,
	},
	{
		title: "October 2nd-10th, 2022",
		description: "2:00PM - 10:00PM",
		icon: CalendarDaysIcon,
	},
	{
		title: "Person McPersonface",
		description: "613-266-2628 / mcorkum@gmail.com",
		icon: ChatBubbleBottomCenterTextIcon,
	},
	{
		title: "Cost",
		description: "$100,0000",
		icon: CurrencyDollarIcon,
	},
];

export default function DetailsListing() {
	return (
		<Panel hasBorder>
			<StackedList dividers>
				{details.map(({ title, description, icon }) => (
					<DetailsItem
						key={title}
						title={title}
						description={description}
						icon={icon}
					/>
				))}
			</StackedList>
		</Panel>
	);
}
