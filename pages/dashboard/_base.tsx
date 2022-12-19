export default function Example() {
	return (
		<div className="h-screen lg:grid lg:grid-cols-sidenav">
			<div className="hidden border-r border-cu-black-200 bg-gradient-to-l from-cu-black-50 to-white lg:block">
				SideNav
			</div>

			<section className="p-12 bg-slate-300 lg:max-w-4xl">
				Content
			</section>
		</div>
	);
}
