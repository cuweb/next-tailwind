const styles = {
	parentHref: `font-semibold text-cu-black-700 hover:text-cu-red`,
	childUl: `mt-4 ml-1 border-l-2 border-cu-black-50 lg:space-y-4`,
	childHref: `block w-full pl-4`,
	childHrefActive: `font-semibold text-cu-red before:bg-cu-red`,
	childHrefNotActive: `text-cu-black-600 before:hidden before:bg-cu-black-200 hover:text-cu-red hover:before:block`,
	childHrefBefore: `before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full`,
};

export default function SideNavSyntax(props: any) {
	return (
		<ul role="list" className="sticky top-8 space-y-9">
			<li>
				<a className={styles.parentHref} href="#">
					About Us
				</a>
				<ul role="list" className={styles.childUl}>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							Roadmap for 2022/23
						</a>
					</li>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							Testimonials
						</a>
					</li>
				</ul>
			</li>

			<li>
				<a className={styles.parentHref} href="#">
					News
				</a>
			</li>

			<li>
				<a className={styles.parentHref} href="#">
					Talks and Workshops
				</a>
				<ul role="list" className={styles.childUl}>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							Coffee Break Events
						</a>
					</li>
				</ul>
			</li>

			<li>
				<a className={styles.parentHref} href="#">
					Our Services
				</a>
				<ul role="list" className={styles.childUl}>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefActive} ${styles.childHrefBefore}`}
							href="/"
						>
							cutheme
						</a>
					</li>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							Carleton CMS
						</a>
					</li>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							CU Framework
						</a>
					</li>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							CU Ecommerce
						</a>
					</li>
					<li className="relative">
						<a
							className={`${styles.childHref} ${styles.childHrefNotActive} ${styles.childHrefBefore}`}
							href="/"
						>
							Other Services
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
}
