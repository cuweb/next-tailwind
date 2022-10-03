import {
	ClockIcon,
	MapPinIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function EventCard(props: any) {
	const { name, link, register, month, day, description } = props;

	return (
		<div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg">
			<div className="absolute px-6 top-48">
				<div className="flex-none w-16 md:w-20">
					<div className="flex flex-col justify-center flex-none w-auto h-16 text-center transform -translate-y-1/2 rounded-lg shadow bg-gray-50 md:h-20">
						<p className="text-xs font-bold uppercase text-cu-red">
							{month}
						</p>
						<p className="text-2xl font-bold uppercase text-cu-black">
							{day}
						</p>
					</div>
				</div>
			</div>
			<div className="flex-shrink-0">
				<img
					className="object-cover w-full h-48"
					src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-between flex-1 p-6 bg-white">
				<div className="flex-1">
					<p className="mt-10 text-xl font-semibold text-gray-900">
						{name}
					</p>
					<p className="flex items-center mt-4 text-sm text-gray-500">
						<ClockIcon
							className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
							aria-hidden="true"
						/>

						<time dateTime={day}>2:00pm - 5:00pm</time>
					</p>
					<p className="flex items-center mt-2 text-sm text-gray-500">
						<MapPinIcon
							className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
							aria-hidden="true"
						/>
						405 Robertson
					</p>
				</div>
			</div>
			<div className="flex">
				<a
					href={register}
					className="flex-1 p-6 font-semibold text-white rounded-bl-lg bg-cu-red hover:bg-cu-red-800 md:px-8"
				>
					Register Now <span aria-hidden="true"> &rarr;</span>
				</a>
				<a
					href={link}
					className="flex items-center px-6 ml-auto rounded-br-lg bg-cu-black-100 text-cu-red-700 hover:bg-cu-red-800 hover:text-white"
				>
					<InformationCircleIcon
						className="flex-shrink-0 w-8 h-8"
						aria-hidden="true"
					/>
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="h-7 w-7"
						fill="currentColor"
					>
						<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
					</svg> */}
				</a>
			</div>
		</div>
	);
}
