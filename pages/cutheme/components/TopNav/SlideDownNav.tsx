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

export default function SlideDownNav() {
	return (
		<div className="fixed top-0 left-0 z-30 invisible w-full overflow-hidden -translate-y-full cu-slidenav bg-cu-black-50">
			<nav className="m-12 overflow-y-scroll text-cu-black-800">
				<ul className="flex flex-col gap-4">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Work</a>
					</li>
					<li>
						<a href="#">Clients</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<button
				type="button"
				className="overlay-close"
				onClick={() => closeMenu()}
			>
				<div className="fixed top-4 right-4">
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
