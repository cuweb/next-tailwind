const styles = {
	dt: `text-sm font-light text-cu-black-600 md:text-base`,
	dd: `text-3xl font-semibold text-cu-black-800 md:text-4xl`,
};

export default function NumberCardCenter() {
	return (
		<div className="relative flex flex-col gap-2 px-6 py-5 text-center border rounded-lg shadow-lg border-cu-black-100">
			<dt className={styles.dt}>Carleton Alumni</dt>
			<dd className={styles.dd}>177,000+</dd>
		</div>
	);
}
