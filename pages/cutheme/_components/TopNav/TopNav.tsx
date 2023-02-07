import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Avatar } from "rds-tailwind";
import FocusNav from "../FocusNav/FocusNav";
import SlideNav from "../SlideNav/SlideNav";
import { openMenu } from "../SlideNav/SlideNav";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function CuThemeNav() {
	const [position, setPosition] = useState(0);
	const [visible, setVisible] = useState(false);
	const [isActive, setActive] = useState(false);

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
			<div className={`cu-topnav sticky z-50 ${cls}`}>
				<FocusNav />

				<div className="flex items-center justify-between h-20 gap-4 px-6 bg-white border-t-2 shadow-lg border-cu-red">
					<div>
						<Link
							href="/cutheme/"
							className="flex items-center flex-shrink-0 group"
						>
							<img
								className="w-auto h-10"
								src="/cu-shield.svg"
								alt="Carleton Shield"
							/>
							<h1 className="flex items-center flex-1 flex-shrink-0 pl-3 pr-2 text-base font-semibold group-hover:text-cu-red sm:text-lg md:text-xl lg:text-2xl">
								{/* Max and Tessie Zelikovitz Centre for Jewish
								Studies */}
								Web Services
							</h1>
						</Link>
					</div>

					<div className="flex items-center gap-4">
						<MagnifyingGlassIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
						{/* <Button
							icon="Bars3Icon"
							isType="grey"
							onClick={() => openMenu()}
							size="sm"
							title="Browse"
						/> */}

						{/* <button
							type="button"
							aria-label="Small Button"
							className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium rounded-md bg-cu-black-50 text-cu-black-800 hover:bg-cu-black-600 hover:text-white focus:outline-none "
						>
							Small Button
						</button>
						<button
							onClick={() => {
								setActive(!isActive);
								openMenu();
							}}
							className={`${isActive ? "animated" : ""}`}
						>
							<span className="icon-bar top"></span>
							<span className="icon-bar middle"></span>
							<span className="icon-bar bottom"></span>
						</button> */}
						{/* <div className="hidden sm:block">
							<Avatar
								rounded="full"
								size="xs"
								user={{
									firstName: "Carlton",
									lastName: "Banks",
									image: {
										alt: "",
										src: "https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg",
									},
								}}
							/>
						</div> */}
					</div>
				</div>

				{/* <div className="space-y-3 overflow-hidden bg-white border-t-4 divide-y shadow-lg divide-cu-black-100 border-cu-red">
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
				</div> */}
			</div>
			<SlideNav />
		</>
	);
}
