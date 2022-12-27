const styles = {
	dt: `text-sm font-light text-cu-black-600 md:text-base`,
	dd: `text-3xl font-semibold text-cu-black-800 md:text-4xl`,
};

export default function CardGridNumber() {
	return (
		<>
			<div className="cu-column not-prose mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 [&:last-child]:mb-0 [&+.cu-column]:mt-8">
				<div className="relative flex flex-col gap-2 px-6 py-5 border rounded-lg shadow-lg border-cu-black-100">
					<dt className={styles.dt}>Carleton Alumni</dt>
					<dd className={styles.dd}>177,000+</dd>
				</div>
			</div>

			<h2>Faculty, Staff and Alumni</h2>

			<div className="cu-column not-prose mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 [&:last-child]:mb-0 [&+.cu-column]:mt-8">
				<div className="relative flex flex-col gap-2 px-6 py-5 rounded-lg shadow-lg">
					<dt className={styles.dt}>Faculty Members</dt>
					<dd className={styles.dd}>1,016</dd>
				</div>

				<div className="relative flex flex-col gap-2 px-6 py-5 rounded-lg shadow-lg">
					<dt className={styles.dt}>Staff Members</dt>
					<dd className={styles.dd}>1,403</dd>
				</div>

				<div className="relative flex flex-col gap-2 px-6 py-5 rounded-lg shadow-lg">
					<dt className={styles.dt}>Contract Instructors</dt>
					<dd className={styles.dd}>893</dd>
				</div>

				<div className="relative flex flex-col gap-2 px-6 py-5 rounded-lg shadow-lg">
					<dt className={styles.dt}>Graduate TAs</dt>
					<dd className={styles.dd}>2,020</dd>
				</div>

				<div className="relative flex flex-col gap-2 px-6 py-5 rounded-lg shadow-lg">
					<dt className={styles.dt}>Library Staff</dt>
					<dd className={styles.dd}>105</dd>
				</div>
			</div>

			<h2>Funding Details</h2>

			<div className="cu-column not-prose mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 [&:last-child]:mb-0 [&+.cu-column]:mt-8">
				<div className="relative flex flex-col gap-2 px-6 py-5 border rounded-lg border-cu-black-100">
					<dt className={styles.dt}>Research Funding</dt>
					<dd className={styles.dd}>$97.4 M</dd>
				</div>

				<div className="relative flex flex-col gap-2 px-6 py-5 border rounded-lg border-cu-black-100">
					<dt className={styles.dt}>Scholarships and Bursaries</dt>
					<dd className={styles.dd}>$32 M</dd>
				</div>

				<div className="relative flex flex-col gap-2 px-6 py-5 border rounded-lg border-cu-black-100">
					<dt className={styles.dt}>Students Receiving OSAP</dt>
					<dd className={styles.dd}>35.8%</dd>
				</div>
			</div>
		</>
	);
}
