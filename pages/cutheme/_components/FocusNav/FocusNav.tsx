const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function FocusNav() {
	return (
		<div className="justify-between hidden h-8 px-6 bg-cu-black-900 lg:flex">
			<ul className="flex items-center justify-between gap-5">
				<li className="flex text-white">
					<a
						href="#"
						className="text-xs text-cu-black-300 hover:text-white"
					>
						Explore Carleton
					</a>
				</li>
			</ul>
			<ul className="flex items-center justify-between gap-5">
				<li className={styles.listItem}>
					<a href="#" className={styles.itemLink}>
						Future Students
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="#" className={styles.itemLink}>
						Current Students
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="#" className={styles.itemLink}>
						Admissions
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="#" className={styles.itemLink}>
						Research
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="#" className={styles.itemLink}>
						About CU
					</a>
				</li>
			</ul>
		</div>
	);
}
