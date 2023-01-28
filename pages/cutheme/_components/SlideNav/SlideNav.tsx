import Link from "next/link";
import { HeroIcon } from "rds-tailwind";

export function openMenu() {
	const bodyRemoveScroll = document.querySelector("body");
	const navOpen = document.querySelector(".cu-slidenav");
	{
		bodyRemoveScroll && bodyRemoveScroll.classList.add("open");
	}
	{
		navOpen && navOpen.classList.add("open");
	}
}

export function closeMenu() {
	const bodyAddScroll = document.querySelector("body");
	const navClose = document.querySelector(".cu-slidenav");
	{
		bodyAddScroll && bodyAddScroll.classList.remove("open");
	}
	{
		navClose && navClose.classList.remove("open");
	}
}

export default function SlideNav() {
	return (
		<div className="fixed top-0 left-0 z-30 invisible w-full h-full overflow-hidden -translate-y-full cu-slidenav bg-cu-black-50 md:h-auto">
			<div className="grid max-w-5xl grid-flow-row grid-cols-2 gap-8 py-12 mx-auto md:grid-cols-3">
				<div className="px-5 py-4 bg-white rounded-md">
					<h3 className="pb-2 mb-3 text-lg font-semibold border-b border-cu-black-200">
						News Blocks
					</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/news/cards"
								onClick={() => closeMenu()}
							>
								News Cards
							</Link>
						</li>
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/news/listings"
								onClick={() => closeMenu()}
							>
								News Listings
							</Link>
						</li>
					</ul>
				</div>
				<div className="px-5 py-4 bg-white rounded-md">
					<h3 className="pb-2 mb-3 text-lg font-semibold border-b border-cu-black-200">
						Event Blocks
					</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/events/cards"
								onClick={() => closeMenu()}
							>
								Event Cards
							</Link>
						</li>
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/events/listings"
								onClick={() => closeMenu()}
							>
								Event Listings (coming soon)
							</Link>
						</li>
					</ul>
				</div>
				<div className="px-5 py-4 bg-white rounded-md">
					<h3 className="pb-2 mb-3 text-lg font-semibold border-b border-cu-black-200">
						People Blocks
					</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/people/cards"
								onClick={() => closeMenu()}
							>
								People Cards
							</Link>
						</li>
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/people/listings"
								onClick={() => closeMenu()}
							>
								People Listings
							</Link>
						</li>
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/people/example"
								onClick={() => closeMenu()}
							>
								Example
							</Link>
						</li>
					</ul>
				</div>
				<div className="px-5 py-4 bg-white rounded-md">
					<h3 className="pb-2 mb-3 text-lg font-semibold border-b border-cu-black-200">
						Video Blocks
					</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/videos/cards"
								onClick={() => closeMenu()}
							>
								Video Cards
							</Link>
						</li>
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/videos/#"
								onClick={() => closeMenu()}
							>
								Video Listings (coming soon)
							</Link>
						</li>
					</ul>
				</div>
				<div className="px-5 py-4 bg-white rounded-md">
					<h3 className="pb-2 mb-3 text-lg font-semibold border-b border-cu-black-200">
						Number Blocks
					</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link
								className="text-cu-black-600 hover:text-cu-red"
								href="/cutheme/numbers/cards"
								onClick={() => closeMenu()}
							>
								Number Cards
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<button
				type="button"
				className="fixed overlay-close top-4 right-4"
				onClick={() => closeMenu()}
			>
				<div className="">
					<HeroIcon
						aria-hidden
						icon="XMarkIcon"
						color="dark-grey"
						size="8"
					/>
				</div>
			</button>
		</div>
	);
}
