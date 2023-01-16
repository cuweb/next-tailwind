import { Button } from "rds-tailwind";

function openNav() {
	// document.getElementById("myNav").style.height = "100%";
	const navOpen = document.getElementById("myNav");
	navOpen.classList.add("open");
}

function closeNav() {
	// document.getElementById("myNav").style.height = "0%";
	const navClose = document.getElementById("myNav");
	navClose.classList.remove("open");
}

// function openMenu() {
// 	const bodyRemoveScroll = document.querySelector("body");
// 	const navOpen = document.querySelector(".overlay");
// 	bodyRemoveScroll.classList.add("open");
// 	navOpen.classList.add("open");
// }

// function closeMenu() {
// 	const bodyAddScroll = document.querySelector("body");
// 	const navClose = document.querySelector(".overlay");
// 	bodyAddScroll.classList.remove("open");
// 	navClose.classList.remove("open");
// }

export default function FullScreenNav() {
	return (
		<>
			<Button
				icon="Bars3Icon"
				size="sm"
				title="Browse"
				onClick={() => openNav()}
			/>
			<div id="myNav" className="overlay">
				<a href="#" className="closebtn" onClick={() => closeNav()}>
					&times;
				</a>

				<div className="overlay-content">
					<a href="#">About</a>
					<a href="#">Services</a>
					<a href="#">Clients</a>
					<a href="#">Contact</a>
				</div>
			</div>
		</>
	);
}
