const classNameRoot =
	"rounded-xl bg-cu-blue-50 px-2 font-semibold text-cu-black-800 mr-2 last:mr-0";

const BadgeRoot = ({ children }: any) => {
	return <span className={`${classNameRoot} text-base`}>{children}</span>;
};

const XSmall = ({ children }: any) => {
	return <span className={`${classNameRoot} text-xs`}>{children}</span>;
};

const Small = ({ children }: any) => {
	return <span className={`${classNameRoot} text-sm`}>{children}</span>;
};

const Large = ({ children }: any) => {
	return <span className={`${classNameRoot} text-lg`}>{children}</span>;
};

const XLarge = ({ children }: any) => {
	return <span className={`${classNameRoot} text-xl`}>{children}</span>;
};

const Badge = Object.assign(BadgeRoot, {
	XSmall,
	Small,
	Large,
	XLarge,
});

export default Badge;
