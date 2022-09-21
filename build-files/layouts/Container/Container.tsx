const classNameRoot = "cu-container py-8";

const White = ({ unstyled, className, children }: any) => {
	return (
		<section className={`${unstyled ? className : classNameRoot} bg-white`}>
			{children}
		</section>
	);
};

const Gray = ({ unstyled, className, children }: any) => {
	return (
		<section
			className={`${unstyled ? className : classNameRoot} bg-cu-black-50`}
		>
			{children}
		</section>
	);
};

const Container = {
	White,
	Gray,
};

export default Container;
