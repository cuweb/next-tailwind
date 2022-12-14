import Image from "next/image";

export default function ListItemsEvents() {
	return (
		<div className="cu-panel not-prose rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
			<h2 className="px-6 py-4 text-base font-bold border-b rounded-t-lg bg-gray-50 text-cu-black-900">
				Event listing
			</h2>
			<ul className="[&>li]:border-cu-cu-black-50 overflow-hidden [&>li]:border-b last:[&>li]:border-b-0">
				<li>
					<a
						href="https://carleton.ca"
						className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
					>
						<div className="flex flex-col gap-4 md:flex-row">
							<div className="flex-none w-16 md:w-20">
								<div className="flex flex-col justify-center flex-none w-auto h-16 text-center rounded-lg shadow bg-gray-50 md:h-20">
									<p className="text-xs font-bold uppercase text-cu-red">
										Dec
									</p>
									<p className="text-2xl font-bold uppercase text-cu-black">
										3
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-4 md:gap-2">
								<h3 className="text-sm font-semibold text-cu-black group-hover:text-cu-red md:text-base">
									Et ut deserunt ipsum minus.
								</h3>
								<ul className="flex flex-col flex-wrap gap-2 md:flex-row">
									<li className="flex items-center text-sm text-cu-black-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
											></path>
										</svg>
										December 3 - 7
									</li>
									<li className="flex items-start text-sm text-cu-black-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											></path>
										</svg>
										71953 Schmidt Row Apt. 896 Laurianefurt,
										TN 88829-0223
									</li>
								</ul>
								<div>
									<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
										Category One
									</p>
									<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
										Category Two
									</p>
								</div>
							</div>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							className="flex-none w-5 h-5 ml-auto text-cu-black-300"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							></path>
						</svg>
					</a>
				</li>
				<li>
					<a
						href="https://carleton.ca"
						className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
					>
						<div className="flex flex-col gap-4 md:flex-row">
							<div className="flex-none w-16 md:w-20">
								<div className="flex flex-col justify-center flex-none w-auto h-16 text-center rounded-lg shadow bg-gray-50 md:h-20">
									<p className="text-xs font-bold uppercase text-cu-red">
										Feb
									</p>
									<p className="text-2xl font-bold uppercase text-cu-black">
										8
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-4 md:gap-2">
								<h3 className="text-sm font-semibold text-cu-black group-hover:text-cu-red md:text-base">
									Optio qui occaecati odit.
								</h3>
								<ul className="flex flex-col flex-wrap gap-2 md:flex-row">
									<li className="flex items-center text-sm text-cu-black-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											></path>
										</svg>
										4:29 am-10:15 am
									</li>
									<li className="flex items-start text-sm text-cu-black-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											></path>
										</svg>
										407, Robertson Hall
									</li>
								</ul>
								<div>
									<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
										Category One
									</p>
									<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
										Category Two
									</p>
								</div>
							</div>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							className="flex-none w-5 h-5 ml-auto text-cu-black-300"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							></path>
						</svg>
					</a>
				</li>
				<li>
					<a
						href="https://carleton.ca"
						className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
					>
						<div className="flex flex-col gap-4 md:flex-row">
							<div className="flex-none w-16 md:w-20">
								<div className="flex flex-col justify-center flex-none w-auto h-16 text-center rounded-lg shadow bg-gray-50 md:h-20">
									<p className="text-xs font-bold uppercase text-cu-red">
										Nov
									</p>
									<p className="text-2xl font-bold uppercase text-cu-black">
										28
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-4 md:gap-2">
								<h3 className="text-sm font-semibold text-cu-black group-hover:text-cu-red md:text-base">
									Title Of Champions 2
								</h3>
								<ul className="flex flex-col flex-wrap gap-2 md:flex-row">
									<li className="flex items-center text-sm text-cu-black-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
											></path>
										</svg>
										November 28 - 29
									</li>
									<li className="flex items-start text-sm text-cu-black-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											></path>
										</svg>
										405A, Robertson Hall
									</li>
								</ul>
								<div>
									<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
										Category One
									</p>
									<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
										Category Two
									</p>
								</div>
							</div>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							className="flex-none w-5 h-5 ml-auto text-cu-black-300"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							></path>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	);
}
