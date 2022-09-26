export default function EventCard(props: any) {
	const { name, link, register, month, day, description } = props;

	return (
		<div
			key={name}
			className="flex flex-col mb-8 bg-white rounded-lg shadow-xl last:mb-0 lg:mb-0"
		>
			<div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
				<div className="absolute top-0 flex flex-col items-center justify-center w-20 h-20 transform -translate-y-1/2 rounded-lg shadow bg-cu-red">
					<p className="text-xs font-bold text-white uppercase">
						{month}
					</p>
					<p className="text-2xl font-bold text-white uppercase">
						{day}
					</p>
				</div>

				<h3 className="text-xl font-medium text-gray-900">{name}</h3>
				<p className="mt-4 text-base text-gray-500">{description}</p>
			</div>
			<div className="flex">
				<a
					href={register}
					className="flex-1 p-6 font-semibold rounded-bl-lg bg-cu-blue-50 text-cu-blue hover:bg-cu-blue-600 hover:text-white md:px-8"
				>
					Register Now <span aria-hidden="true"> &rarr;</span>
				</a>
				<a
					href={link}
					className="flex items-center px-6 ml-auto text-white rounded-br-lg bg-cu-blue-800 hover:bg-cu-red"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="h-7 w-7"
						fill="currentColor"
					>
						<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
					</svg>
				</a>
			</div>
		</div>
	);
}
