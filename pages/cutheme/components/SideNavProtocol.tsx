const styles = {
	topmostParent: ``,
};

export default function SideNavProtocol(props: any) {
	return (
		<ul role="list">
			<li className="relative mt-6 md:mt-0">
				<h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
					Guides
				</h2>
				<div className="relative pl-2 mt-3">
					<div
						className="bg-zinc-800/2.5 dark:bg-white/2.5 absolute inset-x-0 top-0 will-change-transform"
						style={{
							height: 64,
							top: 0,
							opacity: 1,
							borderRadius: 8,
							// transform: none,
							transformOrigin: (50 % 50) % 0,
						}}
					></div>
					<div className="absolute inset-y-0 w-px left-2 bg-zinc-900/10 dark:bg-white/5"></div>
					<div
						className="absolute w-px h-6 left-2 bg-emerald-500"
						style={{ top: 4, opacity: 1 }}
					></div>
					<ul role="list" className="border-l border-transparent">
						<li className="relative">
							<a
								aria-current="page"
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-900 dark:text-white"
								href="/"
							>
								<span className="truncate">Introduction</span>
							</a>
							<ul role="list" style={{ opacity: 1 }}>
								<li>
									<a
										className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
										href="/#guides"
									>
										<span className="truncate">Guides</span>
									</a>
								</li>
								<li>
									<a
										className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
										href="/#resources"
									>
										<span className="truncate">
											Resources
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/quickstart"
							>
								<span className="truncate">Quickstart</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/sdks"
							>
								<span className="truncate">SDKs</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/authentication"
							>
								<span className="truncate">Authentication</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/pagination"
							>
								<span className="truncate">Pagination</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/errors"
							>
								<span className="truncate">Errors</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/webhooks"
							>
								<span className="truncate">Webhooks</span>
							</a>
						</li>
					</ul>
				</div>
			</li>
			<li className="relative mt-6">
				<h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
					Resources
				</h2>
				<div className="relative pl-2 mt-3">
					<div className="absolute inset-y-0 w-px left-2 bg-zinc-900/10 dark:bg-white/5"></div>
					<ul role="list" className="border-l border-transparent">
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/contacts"
							>
								<span className="truncate">Contacts</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/conversations"
							>
								<span className="truncate">Conversations</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/messages"
							>
								<span className="truncate">Messages</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/groups"
							>
								<span className="truncate">Groups</span>
							</a>
						</li>
						<li className="relative">
							<a
								className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								href="/attachments"
							>
								<span className="truncate">Attachments</span>
							</a>
						</li>
					</ul>
				</div>
			</li>
			<li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
				<a
					className="inline-flex w-full justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 py-1 px-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
					href="/#"
				>
					Sign in
				</a>
			</li>
		</ul>
	);
}
