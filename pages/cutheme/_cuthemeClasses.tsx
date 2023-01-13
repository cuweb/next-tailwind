const styles = {
	// gutenbergSpacing: `[&>:not(.cu-container):not(.cu-column)]:px-12`,
	gutenbergSpacing: `[&>.cu-container]:-mx-10`,
	gutenbergWidth: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
	gutenbergFirst: `first:[&>:not(.cu-container):not(.cu-column)]:mt-12`,
	gutenbergLast: `last:[&>:not(.cu-container):not(.cu-column)]:mb-16`,
};

export const gutenStyles = `${styles.gutenbergSpacing} ${styles.gutenbergWidth} ${styles.gutenbergFirst} ${styles.gutenbergLast}`;
