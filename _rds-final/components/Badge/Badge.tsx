const classNameRoot =
	"rounded-xl bg-cu-blue-50 px-2 font-semibold text-cu-black-800 mr-2 last:mr-0 whitespace-nowrap inline-flex";

const BadgeRoot = ({ children }: any) => {
	return <p className={`${classNameRoot} text-base`}>{children}</p>;
};

const XSmall = ({ children }: any) => {
	return <p className={`${classNameRoot} text-xs`}>{children}</p>;
};

const Small = ({ children }: any) => {
	return <p className={`${classNameRoot} text-sm`}>{children}</p>;
};

const Large = ({ children }: any) => {
	return <p className={`${classNameRoot} text-lg`}>{children}</p>;
};

const XLarge = ({ children }: any) => {
	return <p className={`${classNameRoot} text-xl`}>{children}</p>;
};

const Badge = Object.assign(BadgeRoot, {
	XSmall,
	Small,
	Large,
	XLarge,
});

export default Badge;
