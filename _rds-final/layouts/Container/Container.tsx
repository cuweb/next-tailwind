const classNameRoot = "cu-container py-8";

const ContainerRoot = ({ children }: any) => {
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

const Empty = ({ className, children }: any) => {
	return <section className={`${className}`}>{children}</section>;
};

const Container = Object.assign(ContainerRoot, {
	Gray,
	Empty,
});

export default Container;
