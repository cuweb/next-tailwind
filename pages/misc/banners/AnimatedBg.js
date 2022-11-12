import { useEffect, useRef } from "react";
import { Animation } from "./Animation.js";

const AnimatedBg = () => {
	const gradient = new Animation();
	const ref = useRef();

	const divStyle = {
		"--gradient-color-1": "#c3e4ff",
		"--gradient-color-2": "#6ec3f4",
		"--gradient-color-3": "#eae2ff",
		"--gradient-color-4": "#b9beff",
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "auto",
		left: "0",
		bottom: "0",
		overflow: "hidden",
		opacity: 0.5,
	};

	useEffect(() => {
		if (ref.current) {
			gradient.initGradient(ref.current);
		}
	}, [ref]);

	return (
		<canvas
			style={divStyle}
			// className="sm:relative"
			ref={ref}
			data-transition-in
		></canvas>
	);
};

export default AnimatedBg;
