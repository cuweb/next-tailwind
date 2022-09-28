import Badge from "../../Badge/Badge";

export default function FileItem(props: any) {
	const { title, link, date, excerpt, category } = props;

	return (
		<li key={title} className="relative p-6 hover:bg-gray-50">
			<h3 className="font-semibold text-medium text-cu-blue">
				<a href={link} className="hover:text-cu-red focus:outline-none">
					{/* Extend touch target to entire panel */}
					<span className="absolute inset-0" aria-hidden="true" />
					{title}
				</a>
			</h3>
			<p className="mt-1 mb-2 text-sm italic text-cu-black-400">{date}</p>
			<p className="mt-2 text-sm text-cu-black-800">{excerpt}</p>
			<div className="mt-2">
				<Badge.XSmall>{category}</Badge.XSmall>
			</div>
		</li>
	);
}
