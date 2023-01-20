import { HeroIcon } from "rds-tailwind";

export default function VideoListItem() {
	return (
		<li>
			<a
				href="https://carleton.ca"
				className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-4 sm:items-center">
					<div className="relative flex-none hidden w-20 overflow-hidden rounded-md md:w-32 lg:block">
						<img
							className="w-auto h-auto rounded"
							src="https://source.unsplash.com/random/640x360"
							alt=""
						/>
						<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full duration-300 ease-in bg-cu-black-800 bg-opacity-30 group-hover:bg-opacity-80">
							<HeroIcon
								aria-hidden
								color="white"
								icon="PlayCircleIcon"
								size="8"
							/>
						</div>
					</div>
					<div className="flex flex-col flex-auto gap-2">
						<h3 className="text-base font-semibold text-cu-black group-hover:text-cu-red md:text-base">
							Donec commodo sit viverra aliquam porttitor ultrices
							gravida
						</h3>
						<p className="mr-4 text-sm italic text-cu-black-700">
							Duration: 5m 43s
						</p>
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
	);
}
