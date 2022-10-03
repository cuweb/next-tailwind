/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SubmitForm() {
	return (
		<form className="space-y-8 divide-y divide-gray-200">
			<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
				<div className="space-y-6 sm:space-y-5">
					<div>
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Please fill out the following fields to submit an
							event.
						</h3>
					</div>

					<div className="space-y-6 sm:space-y-5">
						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Title
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<div className="flex max-w-lg rounded-md shadow-sm">
									<input
										type="text"
										name="username"
										id="username"
										autoComplete="username"
										className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Time
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<div className="flex max-w-lg rounded-md shadow-sm">
									<input
										type="text"
										name="username"
										id="username"
										autoComplete="username"
										className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Location
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<div className="flex max-w-lg rounded-md shadow-sm">
									<input
										type="text"
										name="username"
										id="username"
										autoComplete="username"
										className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="about"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Deatils
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									defaultValue={""}
								/>
								<p className="mt-2 text-sm text-gray-500">
									Please provide some detailed description for
									the event.
								</p>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Event photo
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
									<div className="space-y-1 text-center">
										<svg
											className="w-12 h-12 mx-auto text-gray-400"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 48 48"
											aria-hidden="true"
										>
											<path
												d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<div className="flex text-sm text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
											>
												<span>Upload a file</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
												/>
											</label>
											<p className="pl-1">
												or drag and drop
											</p>
										</div>
										<p className="text-xs text-gray-500">
											PNG, JPG, GIF up to 10MB
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-8 space-y-6 sm:space-y-5 sm:pt-10">
					<div>
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Contact Information
						</h3>
					</div>
					<div className="space-y-6 sm:space-y-5">
						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								First name
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Last name
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Email address
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Faculty/Department
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="inline-flex items-center flex-1 w-full min-w-0 border border-gray-300 rounded-none rounded-l-md rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-8 space-y-6 divide-y divide-gray-200 sm:space-y-5 sm:pt-10">
					<div>
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Notifications
						</h3>
						<p className="max-w-2xl mt-1 text-sm text-gray-500">
							Please fill out the following field if you would
							like to receive nodification regarding to the event.
						</p>
					</div>
					<div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
						<div className="pt-6 sm:pt-5">
							<div role="group" aria-labelledby="label-email">
								<div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
									<div>
										<div
											className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
											id="label-email"
										>
											By Email
										</div>
									</div>
									<div className="mt-4 sm:col-span-2 sm:mt-0">
										<div className="max-w-lg space-y-4">
											<div className="relative flex items-start">
												<div className="flex items-center h-5">
													<input
														id="comments"
														name="comments"
														type="checkbox"
														className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
													/>
												</div>
												<div className="ml-3 text-sm">
													<label
														htmlFor="comments"
														className="font-medium text-gray-700"
													>
														Comments
													</label>
													<p className="text-gray-500">
														Get notified when
														someones posts a comment
														on a posting.
													</p>
												</div>
											</div>
											<div className="relative flex items-start">
												<div className="flex items-center h-5">
													<input
														id="candidates"
														name="candidates"
														type="checkbox"
														className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
													/>
												</div>
												<div className="ml-3 text-sm">
													<label
														htmlFor="candidates"
														className="font-medium text-gray-700"
													>
														Candidates
													</label>
													<p className="text-gray-500">
														Get notified when a
														candidate applies for a
														job.
													</p>
												</div>
											</div>
											<div className="relative flex items-start">
												<div className="flex items-center h-5">
													<input
														id="offers"
														name="offers"
														type="checkbox"
														className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
													/>
												</div>
												<div className="ml-3 text-sm">
													<label
														htmlFor="offers"
														className="font-medium text-gray-700"
													>
														Offers
													</label>
													<p className="text-gray-500">
														Get notified when a
														candidate accepts or
														rejects an offer.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-6 sm:pt-5">
							<div
								role="group"
								aria-labelledby="label-notifications"
							>
								<div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
									<div>
										<div
											className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
											id="label-notifications"
										>
											Push Notifications
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="max-w-lg">
											<p className="text-sm text-gray-500">
												These are delivered via SMS to
												your mobile phone.
											</p>
											<div className="mt-4 space-y-4">
												<div className="flex items-center">
													<input
														id="push-everything"
														name="push-notifications"
														type="radio"
														className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
													/>
													<label
														htmlFor="push-everything"
														className="block ml-3 text-sm font-medium text-gray-700"
													>
														Everything
													</label>
												</div>
												<div className="flex items-center">
													<input
														id="push-email"
														name="push-notifications"
														type="radio"
														className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
													/>
													<label
														htmlFor="push-email"
														className="block ml-3 text-sm font-medium text-gray-700"
													>
														Same as email
													</label>
												</div>
												<div className="flex items-center">
													<input
														id="push-nothing"
														name="push-notifications"
														type="radio"
														className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
													/>
													<label
														htmlFor="push-nothing"
														className="block ml-3 text-sm font-medium text-gray-700"
													>
														No push notifications
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-5">
				<div className="flex justify-center">
					<button
						type="button"
						className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cu-red hover:bg-cu-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
