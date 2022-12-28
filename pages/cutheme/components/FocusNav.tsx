const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function FocusNav() {
	return (
		<div className="py-2 bg-cu-black-900">
			<div className="flex justify-between m-auto max-w-7xl">
				<ul>
					<li className="flex text-white">
						<a
							href="#"
							className="text-xs text-cu-black-300 hover:text-white"
						>
							Explore Carleton
						</a>
					</li>
				</ul>
				<ul className="flex gap-5">
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

			{/* <ul className="flex justify-end gap-5 py-2 m-auto max-w-7xl">
				<li className="flex">
					<a
						href="#"
						className="text-xs text-cu-black-300 hover:text-white"
					>
						Carleton.ca
					</a>
				</li>
			</ul>
			<ul className="flex justify-end gap-5 py-2 m-auto max-w-7xl">
				<li className="flex">
					<a
						href="#"
						className="text-xs text-cu-black-300 hover:text-white"
					>
						Carleton.ca
					</a>
				</li>
				<li className="flex">
					<a href="#" className={styles.itemLink}>
						Carleton.ca
					</a>
				</li>
			</ul> */}
		</div>
	);
}
