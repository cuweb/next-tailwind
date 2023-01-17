import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "rds-tailwind";
import FocusNav from "../FocusNav/FocusNav";
import { openMenu, SlideDownNav } from "./SlideDownNav";

export default function CuThemeNav() {
	const [position, setPosition] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			let moving = window.pageYOffset;

			setVisible(position > moving);
			setPosition(moving);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const cls = visible
		? "top-0 cu-topnav-visible"
		: "-top-48 cu-topnav-hidden";

	return (
		<>
			<div id="site-header" className={`cu-topnav sticky z-50 ${cls}`}>
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
