import { BriefcaseIcon, CakeIcon } from "@heroicons/react/20/solid";

export default function IntranetBanner() {
	return (
		<>
			<header className="shadow bg-gradient-to-b from-cu-blue to-cu-blue-900">
				<div className="h-56 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-30 md:bg-cover">
					<div className="flex items-start px-6 py-8 mx-auto max-w-7xl md:items-center md:py-12 lg:px-8">
						<h2 className="text-xl italic font-light text-white lg:text-3xl">
							Welcome back, Alfonso
						</h2>
					</div>
				</div>
			</header>
		</>
	);
}
