const classNameRoot =
	"cu-column mx-auto mb-8 grid gap-8 px-8 [&:last-child]:mb-0 grid-cols-1";

const defaultMaxWidth = "max-w-3xl md:max-w-7xl";

const ColumnRoot = ({ maxWidth, children }: any) => {
	return (
		<div
			className={`${
				maxWidth ? maxWidth : defaultMaxWidth
			} ${classNameRoot}`}
		>
			{children}
		</div>
	);
};

const Two = ({ children }: any) => {
	return (
		<div className={`${classNameRoot} ${defaultMaxWidth} md:grid-cols-2`}>
			{children}
		</div>
	);
};

const Three = ({ children }: any) => {
	return (
		<div className={`${classNameRoot} ${defaultMaxWidth} lg:grid-cols-3`}>
			{children}
		</div>
	);
};

const Four = ({ children }: any) => {
	return (
		<div
			className={`${classNameRoot} ${defaultMaxWidth} md:grid-cols-2 lg:grid-cols-4`}
		>
			{children}
		</div>
	);
};

const OneThird = ({ children }: any) => {
	return (
		<div
			className={`${classNameRoot} ${defaultMaxWidth} md:grid-cols-3 md:[&>*:last-child]:col-span-2`}
		>
			{children}
		</div>
	);
};

const TwoThird = ({ children }: any) => {
	return (
		<div
			className={`${classNameRoot} ${defaultMaxWidth} md:grid-cols-3 md:[&>*:first-child]:col-span-2`}
		>
			{children}
		</div>
	);
};

const Column = Object.assign(ColumnRoot, {
	Two,
	Three,
	Four,
	OneThird,
	TwoThird,
});

export default Column;
