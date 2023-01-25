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
			<div className="grid gap-16 px-4 m-12 mx-auto overflow-scroll-y max-w-7xl md:grid-cols-slidenav">
				<div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3">
					<div className="px-5 py-4 bg-white rounded-md">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/content/content-3xl"
									onClick={() => closeMenu()}
								>
									Content @ 768px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/content/content-4xl"
									onClick={() => closeMenu()}
								>
									Content @ 896px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/content/content-5xl"
									onClick={() => closeMenu()}
								>
									Content @ 1024px
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-5 py-4 bg-white rounded-md">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/news/content-3xl"
									onClick={() => closeMenu()}
								>
									News @ 768px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/news/content-4xl"
									onClick={() => closeMenu()}
								>
									News @ 896px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/news/content-5xl"
									onClick={() => closeMenu()}
								>
									News @ 1024px
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-5 py-4 bg-white rounded-md">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/events/content-3xl"
									onClick={() => closeMenu()}
								>
									Events @ 768px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/events/content-4xl"
									onClick={() => closeMenu()}
								>
									Events @ 896px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/events/content-5xl"
									onClick={() => closeMenu()}
								>
									Events @ 1024px
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-5 py-4 bg-white rounded-md">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/people/content-3xl"
									onClick={() => closeMenu()}
								>
									People @ 768px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/people/content-4xl"
									onClick={() => closeMenu()}
								>
									People @ 896px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/people/content-5xl"
									onClick={() => closeMenu()}
								>
									People @ 1024px
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-5 py-4 bg-white rounded-md">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/videos/content-3xl"
									onClick={() => closeMenu()}
								>
									Videos @ 768px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/videos/content-4xl"
									onClick={() => closeMenu()}
								>
									Videos @ 896px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/videos/content-5xl"
									onClick={() => closeMenu()}
								>
									Videos @ 1024px
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-5 py-4 bg-white rounded-md">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/numbers/content-3xl"
									onClick={() => closeMenu()}
								>
									Numbers @ 768px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/numbers/content-4xl"
									onClick={() => closeMenu()}
								>
									Numbers @ 896px
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/numbers/content-5xl"
									onClick={() => closeMenu()}
								>
									Numbers @ 1024px
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="hidden px-5 py-4 bg-white rounded-md md:block">
					Extra Content
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
