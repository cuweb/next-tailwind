import Link from "next/link";
export default function GridSubNav(props: any) {
	return (
		<ul className="flex flex-wrap gap-4">
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/events"
				>
					Events
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/feeds"
				>
					Feeds
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/files"
				>
					Files
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/jobs"
				>
					Jobs
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/links"
				>
					Links
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/marketplace"
				>
					Marketplace
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/news"
				>
					News
				</Link>
			</li>
			<li>
				<Link
					className="text-sm font-semibold text-cu-red hover:text-cu-red-800 hover:underline"
					href="/misc/cards/template"
				>
					Template
				</Link>
			</li>
		</ul>
	);
}
