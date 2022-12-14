import {
	AcademicCapIcon,
	BanknotesIcon,
	CheckBadgeIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

const actions = [
	{
		title: "Benefits",
		href: "#",
		icon: CheckBadgeIcon,
		iconForeground: "text-purple-900",
		iconBackground:
			"bg-purple-50 group-hover:bg-purple-100 border border-purple-200 group-hover:border-purple-100",
	},
	{
		title: "Pay Days",
		href: "#",
		icon: BanknotesIcon,
		iconForeground: "text-amber-900",
		iconBackground:
			"bg-amber-50 group-hover:bg-amber-100 border border-amber-200 group-hover:border-amber-100",
	},
	{
		title: "Expense Report",
		href: "#",
		icon: ReceiptRefundIcon,
		iconForeground: "text-rose-900",
		iconBackground:
			"bg-rose-50 group-hover:bg-rose-100 border border-rose-200 group-hover:border-rose-100",
	},
	{
		title: "Training",
		href: "#",
		icon: AcademicCapIcon,
		iconForeground: "text-indigo-900",
		iconBackground:
			"bg-indigo-50 group-hover:bg-indigo-100 border border-indigo-200 group-hover:border-indigo-100",
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Quicklinks() {
	return (
		<div className="my-8 overflow-hidden divide-y divide-gray-200 rounded-lg shadow-lg bg-cu-black-100 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
			{actions.map((action, actionIdx) => (
				<div
					key={action.title}
					className={classNames(
						actionIdx === 0
							? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
							: "",
						actionIdx === 1 ? "sm:rounded-tr-lg" : "",
						actionIdx === actions.length - 2
							? "sm:rounded-bl-lg"
							: "",
						actionIdx === actions.length - 1
							? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
							: "",
						"group relative bg-white p-6 hover:bg-gray-50"
						// "group relative bg-white p-6 hover:bg-gradient-to-t hover:from-gray-50 hover:to-white" // --> with bg gradient hover effect
					)}
				>
					<div>
						<span
							className={classNames(
								action.iconBackground,
								action.iconForeground,
								"inline-flex rounded-lg p-3 ring-4 ring-white"
							)}
						>
							<action.icon
								className="w-6 h-6"
								aria-hidden="true"
							/>
						</span>
					</div>
					<div className="mt-4">
						<h3 className="text-lg font-medium">
							<a
								href={action.href}
								className="focus:outline-none"
							>
								{/* Extend touch target to entire panel */}
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								{action.title}
							</a>
						</h3>
						<p className="mt-2 text-sm text-gray-500">
							Doloribus dolores nostrum quia qui natus officia
							quod et dolorem. Sit repellendus qui ut at
							blanditiis et quo et molestiae.
						</p>
					</div>
					<span
						className="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-cu-red"
						aria-hidden="true"
					>
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
						</svg>
					</span>
				</div>
			))}
		</div>
	);
}
