import { HeroIcon } from "rds-tailwind";

export default function VideoCard() {
	return (
		<div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
			<a
				href="https://carleton.ca"
				className="relative flex flex-col h-full cursor-pointer"
			>
				<div className="relative">
					<img
						className="object-cover w-full"
						src="https://source.unsplash.com/random/640x360"
						alt=""
					/>
					<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full duration-300 ease-in group-hover:bg-cu-black-900 group-hover:bg-opacity-50">
						<HeroIcon
							aria-hidden
							color="white"
							icon="PlayCircleIcon"
							size="20"
						/>
					</div>
				</div>

				<div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
					<p className="flex items-start text-sm italic text-cu-black-600 @sm:md:text-base">
						Duration: 5m 43s
					</p>
					<h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
						Donec commodo sit viverra aliquam porttitor ultrices
						gravida
					</h3>
				</div>

				<div className="pb-5 mt-auto px-7">
					<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
						Category One
					</p>
					<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
						Category Two
					</p>
				</div>
			</a>
		</div>
	);
}
