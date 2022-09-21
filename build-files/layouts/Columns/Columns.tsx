const classNameRoot =
	"cu-column mx-auto mb-8 grid grid-cols-1 max-w-7xl gap-8 px-8 [&:last-child]:mb-0";

const One = ({ unstyled, className, children }: any) => {
	return (
		<div className={`${unstyled ? className : classNameRoot}`}>
			{children}
		</div>
	);
};

const Two = ({ unstyled, className, children }: any) => {
	return (
		<div
			className={`${unstyled ? className : classNameRoot} md:grid-cols-2`}
		>
			{children}
		</div>
	);
};

const Three = ({ unstyled, className, children }: any) => {
	return (
		<div
			className={`${unstyled ? className : classNameRoot} md:grid-cols-3`}
		>
			{children}
		</div>
	);
};

const Four = ({ unstyled, className, children }: any) => {
	return (
		<div
			className={`${
				unstyled ? className : classNameRoot
			} md:grid-cols-2 lg:grid-cols-4`}
		>
			{children}
		</div>
	);
};

const OneThird = ({ unstyled, className, children }: any) => {
	return (
		<div
			className={`${
				unstyled ? className : classNameRoot
			} grid-cols-one3rd`}
		>
			{children}
		</div>
	);
};

const TwoThird = ({ unstyled, className, children }: any) => {
	return (
		<div
			className={`${
				unstyled ? className : classNameRoot
			} md:grid-cols-two3rd`}
		>
			{children}
		</div>
	);
};

const Column = {
	One,
	Two,
	Three,
	Four,
	OneThird,
	TwoThird,
};

export default Column;
