import { BriefcaseIcon, CakeIcon } from "@heroicons/react/20/solid";

export default function Profile() {
	return (
		<>
			<header className="shadow bg-gradient-to-b from-slate-100 to-slate-300">
				<div className="bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-30 md:bg-cover">
					<div className="flex items-start px-6 py-8 mx-auto max-w-7xl md:items-center md:py-12 lg:px-8">
						<img
							className="w-20 h-20 border-2 border-white rounded-full shadow border-spacing-4"
							src="/carlton-banks/profile-square.jpg"
							alt="Carlton Banks"
						/>
						<div className="ml-4 text-cu-black-800">
							<h1 className="mt-2.5 text-2xl font-bold md:mt-0">
								Carlton Banks
								<span className="ml-2 text-base font-light text-cu-black-600">
									(He/Him)
								</span>
							</h1>
							<ul className="flex flex-col gap-2 mt-2 text-sm text-cu-black-600 md:flex-row md:gap-6">
								<li className="flex">
									<BriefcaseIcon
										className="flex-shrink-0 w-5 h-5 mr-2 text-cyan-600"
										aria-hidden="true"
										aria-label="Job Title:"
									/>
									Manager at Peacock Stop, UCLA
								</li>
								<li className="flex">
									<CakeIcon
										className="flex-shrink-0 w-5 h-5 mr-2 text-cyan-600"
										aria-hidden="true"
										aria-label="Reports To:"
									/>
									August 4th, 1974
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
