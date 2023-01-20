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
			<div className="grid gap-16 m-12 mx-auto h-96 max-w-7xl grid-cols-slidenav">
				<div className="grid grid-cols-3 gap-4">
					<div className="bg-white">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/examples/"
									onClick={() => closeMenu()}
								>
									Content examples
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/examples/news"
									onClick={() => closeMenu()}
								>
									News cards and listings
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/examples/events"
									onClick={() => closeMenu()}
								>
									Event cards and listings
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/examples/people"
									onClick={() => closeMenu()}
								>
									People cards and listings
								</Link>
							</li>
						</ul>
					</div>
					<div className="bg-cu-black-100">
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									href="/cutheme/examples/numbers"
									onClick={() => closeMenu()}
								>
									Numbers cards
								</Link>
							</li>
							<li>
								<Link
									href="/cutheme/examples/videos"
									onClick={() => closeMenu()}
								>
									Video cards
								</Link>
							</li>
						</ul>
					</div>
					<div className="bg-white">More nav items</div>
				</div>
				<div className="bg-white">Extra Content</div>
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
			{/* <nav className="m-12 overflow-y-scroll text-cu-black-800">
				<ul className="flex flex-col gap-4">
					<li>
						<Link
							href="/cutheme/examples/"
							onClick={() => closeMenu()}
						>
							Content Examples
						</Link>
					</li>
					<li>
						<Link
							href="/cutheme/examples/news"
							onClick={() => closeMenu()}
						>
							News cards and listings
						</Link>
					</li>
					<li>
						<Link
							href="/cutheme/examples/events"
							onClick={() => closeMenu()}
						>
							Event cards and listings
						</Link>
					</li>
					<li>
						<Link
							href="/cutheme/examples/people"
							onClick={() => closeMenu()}
						>
							People cards and listings
						</Link>
					</li>
				</ul>
			</nav> */}
		</div>
	);
}
