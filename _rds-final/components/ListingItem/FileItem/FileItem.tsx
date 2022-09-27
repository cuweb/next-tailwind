import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function FileItem(props: any) {
	const { name, preview, handle, link, location, time, dateFull, imageUrl } =
		props;

	return (
		<>
			<li key={name}>
				<a
					href="#"
					className="flex items-center px-4 py-6 hover:bg-gray-50"
				>
					<svg
						className="w-10 h-10"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<g>
							<g>
								<g fill="none" fillRule="evenodd">
									<g fillRule="nonzero">
										<path
											d="M4 23V1h10.84L20 6.473V23z"
											fill="#fff"
										></path>
										<g fill="#E91C24">
											<path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z"></path>
											<path
												d="M14 7V1h.195L20 6.805V7z"
												fillOpacity=".215"
											></path>
											<path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z"></path>
										</g>
									</g>
									<path
										d="M16 15.34c0-1.98-8-.117-8 2.263 0 .192.135.397.353.397 1.675 0 4.779-11 3.26-11s.859 9.023 3.66 9.023c.408 0 .727-.167.727-.683z"
										stroke="#E91C24"
										strokeWidth=".5"
									></path>
								</g>
							</g>
						</g>
					</svg>

					<div className="min-w-0 px-4">
						<h3 className="mb-1 text-sm font-semibold text-cu-black-900">
							{name}
						</h3>
						<p className="text-xs text-gray-500">
							{preview} - {dateFull}
						</p>
					</div>

					<ChevronRightIcon
						className="w-5 h-5 ml-auto text-cu-black-300"
						aria-hidden="true"
					/>
				</a>
			</li>
		</>
	);
}
