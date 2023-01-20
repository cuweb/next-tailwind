import { HeroIcon } from "rds-tailwind";

export default function VideoCard() {
	return (
		<div className="relative flex flex-col overflow-hidden duration-300 ease-in bg-white rounded-lg shadow-lg not-prose group hover:scale-105">
			<a href="https://carleton.ca" className="cursor-pointer">
				<div className="relative">
					<img
						className="object-cover w-full"
						src="https://source.unsplash.com/random/640x360"
						alt=""
					/>
					<div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-cu-black-800 bg-opacity-40 duration-300 ease-in group-hover:bg-opacity-80 group-hover:[&>svg]:text-cu-red">
						<HeroIcon
							aria-hidden
							color="white"
							icon="PlayCircleIcon"
							size="16"
						/>
					</div>
				</div>

				<div className="flex flex-col py-6 space-y-3 px-7">
					<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
						Donec commodo sit viverra aliquam porttitor ultrices
						gravida
					</h3>
					<p className="flex items-start text-sm italic text-cu-black-600">
						Duration: 5m 43s
					</p>
					{/* <div className="mt-4">
						<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
							Category One
						</p>
						<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
							Category Two
						</p>
					</div> */}
				</div>
			</a>
		</div>
	);
}
