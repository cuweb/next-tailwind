const styles = {
	parentHref: `font-semibold hover:text-cu-red`,
	childHref: `block py-2 pl-4 hover:text-cu-red hover:bg-white hover:border-l hover:border-cu-red hover:-ml-px`,
	grandchildHref: `block py-2 hover:text-cu-red`,
	childUl: `border-l border-cu-black-100 ml-1 mt-2`,
	grandchildUl: `pl-8`,
};

export default function SideNavCu() {
	return (
		<ul role="list" className="sticky top-8">
			<li>
				<a className={styles.parentHref} href="#">
					Parent Nav Item
				</a>
				<ul role="list" className={styles.childUl}>
					<li>
						<a className={styles.childHref} href="#">
							Child Nav Item 1
						</a>
					</li>
					<li>
						<a className={styles.childHref} href="#">
							Child Nav Item 2
						</a>
					</li>
					<li>
						<a className={styles.childHref} href="#">
							Child Nav Item 3
						</a>
						<ul role="list" className={styles.grandchildUl}>
							<li>
								<a className={styles.grandchildHref} href="#">
									Grandchild Nav Item 1
								</a>
							</li>
							<li>
								<a className={styles.grandchildHref} href="#">
									Grandchild Nav Item 2
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a className={styles.childHref} href="#">
							Child Nav Item 4
						</a>
					</li>
					<li>
						<a className={styles.childHref} href="#">
							Child Nav Item 5
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
}
