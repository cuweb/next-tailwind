import Link from "next/link";
import type { NextPage } from "next";
// import Head from "next/head";
// import { TopNav, FooterBasic, Banner } from "rds-tailwind";
// import SideNavLight from "./components/SideNavLight";

const CuTheme: NextPage = () => {
	return (
		<div className="m-20 space-y-6">
			<p>
				<Link
					className="font-semibold text-cu-red"
					href="/cutheme/light"
				>
					Obi-Wan Cleanobi (the light side nav)
				</Link>
			</p>
			<p>
				<Link
					className="font-semibold text-cu-red"
					href="/cutheme/fade"
				>
					Darth Fader (the faded side nav)
				</Link>
			</p>
		</div>
	);
};

export default CuTheme;
