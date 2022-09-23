const classNameRoot = "cu-container py-8";

const Empty = ({ className, children }: any) => {
	return <section className={`${className}`}>{children}</section>;
};

const White = ({ children }: any) => {
	return (
		<section className={`${classNameRoot} bg-white`}>{children}</section>
	);
};

const Gray = ({ children }: any) => {
	return (
		<section className={`${classNameRoot} bg-cu-black-50`}>
			{children}
		</section>
	);
};

const Container = {
	Empty,
	White,
	Gray,
};

export default Container;
