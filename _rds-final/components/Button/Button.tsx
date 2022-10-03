const classNameRoot =
	"inline-flex items-center rounded-md border px-6 py-2 text-base focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

const Red = (props: any) => {
	const { text, link } = props;
	return (
		<button
			type="button"
			className={`${classNameRoot} border-transparent bg-cu-red font-medium text-white hover:bg-cu-red-900 focus:outline-none`}
		>
			{text}
		</button>
	);
};

const Gray = (props: any) => {
	const { text, link } = props;
	return (
		<button
			type="button"
			className={`${classNameRoot} border-transparent bg-cu-black-50 font-medium text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none`}
		>
			{text}
		</button>
	);
};

const Ghost = (props: any) => {
	const { text, link } = props;
	return (
		<button
			type="button"
			className={`${classNameRoot} border-gray-300 bg-white font-medium text-cu-black-800 shadow-sm hover:bg-gray-50 focus:outline-none`}
		>
			{text}
		</button>
	);
};

const Button = {
	Red,
	Gray,
	Ghost,
};

export default Button;
