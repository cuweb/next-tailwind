import React from "react";

export default function DashboardPanel(props: any) {
	const { title, innerPadding } = props;
	const contentPadding = innerPadding ? innerPadding : "p-0";

	return (
		<section className="bg-white shadow sm:rounded-lg">
			<h2 className="px-6 py-4 text-base font-bold border-b rounded-t-lg bg-gray-50 text-cu-black-900">
				{title}
			</h2>
			<div className={contentPadding}>
				{props.children || "Dashboard Panel is Empty"}
			</div>
		</section>
	);
}
