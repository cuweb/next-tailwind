import FooterSwoosh from "../FooterSwoosh/FooterSwoosh";

const FooterIntranet = () => {
	return (
		<footer
			className="pt-12 bg-cu-black-900"
			aria-labelledby="footer-heading"
		>
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<FooterSwoosh />
		</footer>
	);
};

export default FooterIntranet;
