const classNameRoot =
	"cu-column mx-auto mb-8 grid max-w-7xl gap-8 px-8 [&:last-child]:mb-0 grid-cols-1";

const One = ({ children }: any) => {
	return <div className={classNameRoot}>{children}</div>;
};

const Two = ({ children }: any) => {
	return <div className={`${classNameRoot} md:grid-cols-2`}>{children}</div>;
};

const Three = ({ children }: any) => {
	return <div className={`${classNameRoot} md:grid-cols-3`}>{children}</div>;
};

const Four = ({ children }: any) => {
	return (
		<div className={`${classNameRoot} md:grid-cols-2 lg:grid-cols-4`}>
			{children}
		</div>
	);
};

const OneThird = ({ children }: any) => {
	return (
		<div className={`${classNameRoot} lg:grid-cols-one3rd`}>{children}</div>
	);
};

const TwoThird = ({ children }: any) => {
	return (
		<div className={`${classNameRoot} lg:grid-cols-two3rd`}>{children}</div>
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
