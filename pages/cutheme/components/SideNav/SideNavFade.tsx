import Link from "next/link";
import { SideNavData as data } from "./SideNavData";

const styles = {
	topParentUl: `sticky top-8 space-y-4`,
	topParentLink: `block font-semibold hover:text-cu-red pr-8`,
	listItemLink: `text-sm block py-2.5 pl-4 pr-8 hover:text-cu-red hover:bg-white hover:border-l hover:border-cu-red hover:-ml-px`,
	childUl: `border-l border-cu-black-100 mt-2`,
	active: `bg-white border-l border-cu-red -ml-px`,
	activeTopLink: `[&>a]:text-cu-red [&>a]:font-semibold [&>a]:hover:bg-transparent`,
};

export default function SideNavFade() {
	return (
		<nav className="relative hidden bg-gradient-to-l from-cu-black-50 to-white py-14 lg:block">
			<ul role="list" className={styles.topParentUl}>
				<li>
					<Link className={styles.topParentLink} href="/cutheme">
						Content with clean nav
					</Link>
				</li>
				<li>
					<Link
						className={styles.topParentLink}
						href="/cutheme/nav-fade"
					>
						Content with fading nav
					</Link>
				</li>
				<li>
					<a className={styles.topParentLink} href="#">
						Block Examples
					</a>
					<ul role="list" className={styles.childUl}>
						<li>
							<a className={`${styles.listItemLink}`} href="#">
								Module 1: Placeholder only
							</a>
						</li>
						<li
							className={`${styles.active} ${styles.activeTopLink}`}
						>
							<a className={`${styles.listItemLink}`} href="#">
								Module 2: Custom Gutenberg Blocks
							</a>
							<ul role="list">
								{data.map(({ id, title, link }) => (
									<li key={id}>
										<a
											className={`${styles.listItemLink} pl-8`}
											href={link}
										>
											{title}
										</a>
									</li>
								))}
							</ul>
						</li>
						<li>
							<a className={`${styles.listItemLink}`} href="#">
								Module 3: Placeholder only
							</a>
						</li>
						<li>
							<a className={`${styles.listItemLink}`} href="#">
								Module 4: Just another placeholder
							</a>
						</li>
						<li>
							<a className={`${styles.listItemLink}`} href="#">
								Module 5: What, you don&apos;t like
								placeholders?
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a className={styles.topParentLink} href="#">
						Coming soon
					</a>
				</li>
				<li>
					<a className={styles.topParentLink} href="#">
						Coming soon. Maybe.
					</a>
				</li>
			</ul>
		</nav>
	);
}
