import Link from "next/link";

const styles = {
	navHover: `block pb-3 text-sm border-b-2 border-white hover:border-b-2 hover:border-cu-red`,
};

export default function CuThemeNav() {
	return (
		<div className="relative z-50 px-4 space-y-3 overflow-hidden bg-white border-t-4 divide-y shadow-lg divide-cu-black-100 border-cu-red">
			<div className="px-2 pt-3">
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
						WordPress ¯\_(ツ)_/¯
					</h1>
				</Link>
			</div>
			<nav className="px-2 pt-3">
				<ul className="flex gap-5">
					<li className="inline-flex">
						<Link
							href="/cutheme/content"
							className="block pb-3 text-sm border-b-2 border-white hover:border-b-2 hover:border-cu-red"
						>
							Content
						</Link>
					</li>
					<li className="inline-flex">
						<Link href="#" className={styles.navHover}>
							News
						</Link>
					</li>
					<li className="inline-flex">
						<Link href="#" className={styles.navHover}>
							Events
						</Link>
					</li>
					<li className="inline-flex">
						<Link href="#" className={styles.navHover}>
							People
						</Link>
					</li>
					<li className="inline-flex">
						<Link href="#" className={styles.navHover}>
							Stories
						</Link>
					</li>
					<li className="inline-flex">
						<Link href="#" className={styles.navHover}>
							Videos
						</Link>
					</li>
					<li className="inline-flex">
						<Link href="#" className={styles.navHover}>
							Facilities
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
