const classNameRoot = "cu-container py-8";

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
	White,
	Gray,
};

export default Container;
