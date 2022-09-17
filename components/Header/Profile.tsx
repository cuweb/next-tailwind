import { BriefcaseIcon, CakeIcon } from "@heroicons/react/20/solid";

export default function Profile() {
	return (
		<>
			<header className="shadow bg-gradient-to-b from-slate-100 to-slate-300">
				<div className="bg-bottom bg-no-repeat bg-cover bg-cu-waves-white">
					<div className="flex items-center px-6 py-12 mx-auto max-w-7xl lg:px-8">
						<img
							className="w-20 h-20 border-2 border-white rounded-full shadow border-spacing-4"
							src="/carlton-banks/profile-square.jpg"
							alt="Carlton Banks"
						/>
						<div className="ml-4 text-cu-black-800">
							<h1 className="text-2xl font-bold">
								Carlton Banks
								<span className="ml-2 text-base font-light text-cu-black-600">
									(She/Her)
								</span>
							</h1>
							<ul className="flex mt-1 text-sm text-cu-black-600">
								<li className="flex mr-6">
									<BriefcaseIcon
										className="text- mr-1.5 h-5 w-5 flex-shrink-0 text-cyan-600"
										aria-hidden="true"
										aria-label="Job Title:"
									/>
									Manager at Peacock Stop, UCLA
								</li>
								<li className="flex mr-6">
									<CakeIcon
										className="mr-1.5 h-5 w-5 flex-shrink-0 text-cyan-600"
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
