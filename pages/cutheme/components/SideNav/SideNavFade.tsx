const styles = {
	topParentUl: `sticky top-8 space-y-4`,
	topParentLink: `font-semibold hover:text-cu-red pr-4`,
	listItemLink: `text-sm block py-2.5 pl-4 pr-4 hover:text-cu-red hover:bg-white hover:border-l hover:border-cu-red hover:-ml-px`,
	childUl: `border-l border-cu-black-100 mt-2`,
	active: `bg-white border-l border-cu-red -ml-px`,
	activeTopLink: `[&>a]:text-cu-red [&>a]:font-semibold [&>a]:hover:bg-transparent`,
};

export default function SideNavFade() {
	return (
		<ul role="list" className={styles.topParentUl}>
			<li>
				<a className={styles.topParentLink} href="#">
					Introduction to cutheme
				</a>
			</li>
			<li>
				<a className={styles.topParentLink} href="#">
					Basic Training
				</a>
			</li>
			<li>
				<a className={styles.topParentLink} href="#">
					Advanced Training
				</a>
				<ul role="list" className={styles.childUl}>
					<li>
						<a className={`${styles.listItemLink}`} href="#">
							Module 1: Overview of Advanced Content Blocks
						</a>
					</li>
					<li className={`${styles.active} ${styles.activeTopLink}`}>
						<a className={`${styles.listItemLink}`} href="#">
							Module 2: Custom Gutenberg Blocks
						</a>
						<ul role="list">
							<li>
								<a
									className={`${styles.listItemLink} pl-8`}
									href="#"
								>
									Card Grid Layouts
								</a>
							</li>
							<li>
								<a
									className={`${styles.listItemLink} pl-8`}
									href="#"
								>
									List Item Layouts
								</a>
							</li>
							<li>
								<a
									className={`${styles.listItemLink} pl-8`}
									href="#"
								>
									Hero Image Configuration
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a className={`${styles.listItemLink}`} href="#">
							Module 3: Working with Media
						</a>
					</li>
					<li>
						<a className={`${styles.listItemLink}`} href="#">
							Module 4: Building Forms
						</a>
					</li>
					<li>
						<a className={`${styles.listItemLink}`} href="#">
							Module 5: Theme Settings
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a className={styles.topParentLink} href="#">
					Accessibility Training
				</a>
			</li>
			<li>
				<a className={styles.topParentLink} href="#">
					SEO and Analytics Training
				</a>
			</li>
			<li>
				<a className={styles.topParentLink} href="#">
					Support and Feature Requests
				</a>
			</li>
		</ul>
	);
}
