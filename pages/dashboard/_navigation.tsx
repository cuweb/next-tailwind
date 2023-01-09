import Image from "next/image";
import Link from "next/link";
import {
	ArrowLeftOnRectangleIcon,
	BriefcaseIcon,
	LinkIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
	{
		name: "Profile",
		href: "/dashboard",
		icon: UserCircleIcon,
		current: true,
	},
	{
		name: "Resource 1",
		href: "/dashboard/resource",
		icon: BriefcaseIcon,
		current: false,
	},
	{
		name: "Resource 2",
		href: "/dashboard/resource",
		icon: LinkIcon,
		current: false,
	},
];

const secondaryNavigation = [
	{
		name: "Back To Site",
		href: "/dashboard",
		icon: ArrowLeftOnRectangleIcon,
	},
];

const adminNavigation = [
	{
		name: "Manage Resource 1",
		href: "/dashboard/list",
		icon: BriefcaseIcon,
		current: false,
	},
	{
		name: "Manage Resource 2",
		href: "/dashboard/list",
		icon: LinkIcon,
		current: false,
	},
	{
		name: "Manage Events",
		href: "/dashboard/events",
		icon: LinkIcon,
		current: false,
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function DashboardNav() {
	return (
		<>
			<div>
				<Link href="/dashboard" className="flex items-center p-4">
					<Image
						className="w-auto h-10"
						src="/cu-shield.svg"
						alt="Carleton"
					/>
					<h1 className="items-center pl-3 pr-2 text-xl font-semibold ">
						Dashboard
					</h1>
				</Link>
			</div>
			<ul>
				{navigation.map((item) => (
					<li key={item.name}>
						<a
							href={item.href}
							className={classNames(
								item.current
									? "border-cu-red bg-cu-red-50 text-cu-red"
									: "border-transparent text-cu-black-600 hover:bg-white hover:text-cu-red",
								"group flex items-center border-l-4 p-3 text-base font-medium"
							)}
						>
							<item.icon
								className={classNames(
									item.current
										? "text-cu-red"
										: "text-cu-black-400 group-hover:text-cu-black-800",
									"mr-3 h-6 w-6 flex-shrink-0"
								)}
								aria-hidden="true"
							/>
							{item.name}
						</a>
					</li>
				))}
			</ul>
			<div>
				<h2 className="p-4 mt-8 mb-2 text-sm font-medium bg-white text-cu-bl10ck:900 border-cu-grey-200 border-y">
					Admin Options
				</h2>
				<ul>
					{adminNavigation.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								className={classNames(
									item.current
										? "border-cu-red bg-cu-red-50 text-cu-red"
										: "border-transparent text-cu-black-600 hover:bg-white hover:text-cu-red",
									"group flex items-center border-l-4 p-3 text-sm font-medium"
								)}
							>
								<item.icon
									className={classNames(
										item.current
											? "text-cu-red"
											: "text-cu-black-400 group-hover:text-cu-black-800",
										"mr-3 h-5 w-5 flex-shrink-0"
									)}
									aria-hidden="true"
								/>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-auto mb-2">
				{secondaryNavigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="flex items-center p-2 text-sm font-medium border-l-4 border-transparent group text-cu-black-600 hover:bg-white hover:text-cu-red"
					>
						<item.icon
							className="w-5 h-5 mr-3 text-cu-black-400 group-hover:text-cu-black-800"
							aria-hidden="true"
						/>
						{item.name}
					</a>
				))}
			</div>
		</>
	);
}
