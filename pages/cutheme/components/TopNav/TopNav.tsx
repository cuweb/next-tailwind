import Link from "next/link";
import { Button } from "rds-tailwind";
import FocusNav from "../FocusNav/FocusNav";
import FullScreenNav from "./FullScreenNav";
import SlideDownNav from "./SlideDownNav";

const styles = {
	navHover: `block text-sm border-b-2 border-white hover:border-b-2 hover:border-cu-red`,
};

function openMenu() {
	const bodyRemoveScroll = document.querySelector("body");
	const navOpen = document.querySelector(".cu-slidenav");
	bodyRemoveScroll.classList.add("open");
	navOpen.classList.add("open");
}

export default function CuThemeNav() {
	return (
		<>
			<div className="sticky top-0 z-50 w-full">
				<FocusNav />
				<div className="space-y-3 overflow-hidden bg-white border-t-4 divide-y shadow-lg divide-cu-black-100 border-cu-red">
					<div className="px-6 pt-3">
						<Link
							href="/cutheme/"
							className="flex items-center flex-shrink-0 group"
						>
							<img
								className="w-auto h-10"
								src="/cu-shield.svg"
								alt="Carleton Shield"
							/>
							<h1 className="flex items-center flex-shrink-0 pl-3 pr-2 text-2xl font-semibold group-hover:text-cu-red">
								Web Services
							</h1>
						</Link>
					</div>

					<nav className="px-6 py-3">
						<Button
							icon="Bars3Icon"
							size="sm"
							title="Browse"
							onClick={() => openMenu()}
						/>
					</nav>
				</div>
			</div>
			<SlideDownNav />
		</>
	);
}
