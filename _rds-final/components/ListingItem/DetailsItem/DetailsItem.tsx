export default function DetailsItem(props: any) {
	const { title, description } = props;
	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none">
				<div className="flex items-start gap-4">
					<div className="flex-none w-auto">
						<props.icon className="flex-none w-6 h-6 text-cu-black-400" />
					</div>
					<div className="flex flex-col flex-auto gap-1">
						<h3 className="text-base font-semibold text-cu-black group-hover:text-cu-red">
							{title}
						</h3>
						<p className="text-base text-cu-black-900">
							{description}
						</p>
					</div>
				</div>
			</div>
		</li>
	);
}
