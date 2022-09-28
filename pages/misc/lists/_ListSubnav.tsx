export default function ListSubNav(props: any) {
	return (
		<ul className="flex flex-wrap gap-4">
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/"
				>
					Home
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/events"
				>
					Events
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/feeds"
				>
					Feeds
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/files"
				>
					Files
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/jobs"
				>
					Jobs
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/links"
				>
					Links
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/marketplace"
				>
					Marketplace
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/news"
				>
					News
				</a>
			</li>
			<li>
				<a
					className="text-sm font-semibold text-cu-blue hover:text-cu-red"
					href="/misc/lists/template"
				>
					Template
				</a>
			</li>
		</ul>
	);
}
