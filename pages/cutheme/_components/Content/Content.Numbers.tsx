import { Column } from "rds-tailwind";
import NumberCardCenter from "../Numbers/NumberCardCenter";
import NumberCard from "../Numbers/NumbersCard";

export default function ContentNumbers() {
	return (
		<>
			<h2>H2 Heading</h2>

			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit.
			</p>

			<h3>2 col left aligned</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<div className="my-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 [&:last-child]:mb-0 [&+.cu-column]:mt-8 ">
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</div>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam. Faucibus commodo
				massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
				mauris semper sed amet vitae sed turpis id. Id dolor praesent
				donec est. Odio penatibus risus viverra tellus varius sit neque
				erat velit.
			</p>

			<h3>2 col center aligned</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<div className="my-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 [&:last-child]:mb-0 [&+.cu-column]:mt-8 ">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</div>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis. Nam hendrerit luctus ex, ac
				rhoncus mauris pretium varius. Phasellus dignissim sodales
				feugiat. Curabitur quam leo, aliquet nec risus quis, porta
				vestibulum erat. Aliquam fermentum auctor convallis. Donec
				faucibus eros nibh, eu semper purus faucibus sit amet.
				Suspendisse quis consectetur nulla. Phasellus tristique lectus
				nisl, in mollis urna imperdiet nec. Quisque fringilla nisl
				convallis, tempus mi vitae, interdum metus. In hac habitasse
				platea dictumst. In mi nunc, consectetur nec mi sed, volutpat
				pulvinar ipsum.
			</p>

			<h3>3 col left aligned</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<div className="my-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 [&:last-child]:mb-0 [&+.cu-column]:mt-8 ">
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</div>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis.
			</p>

			<h3>3 col left breaking outside a max width below 1024</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<Column cols="3" maxWidth="5xl">
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</Column>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis. Nam hendrerit luctus ex, ac
				rhoncus mauris pretium varius.
			</p>

			<h3>3 col center aligned</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<div className="my-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 [&:last-child]:mb-0 [&+.cu-column]:mt-8 ">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</div>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis.
			</p>

			<h3>3 col center breaking outside a max width below 1024</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<Column cols="3" maxWidth="5xl">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</Column>

			<p>
				Phasellus et lectus elementum, dictum odio quis, euismod augue.
				Nulla ultricies orci eu volutpat mollis. Aenean mauris leo,
				congue id laoreet vitae, bibendum at dui. Proin ac aliquet enim,
				a ullamcorper tortor. Ut mattis, ante id porttitor elementum,
				lorem mauris rutrum enim, ut tristique est est at turpis. Nam
				hendrerit luctus ex, ac rhoncus mauris pretium varius. Phasellus
				dignissim sodales feugiat. Curabitur quam leo, aliquet nec risus
				quis, porta vestibulum erat. Aliquam fermentum auctor convallis.
				Donec faucibus eros nibh, eu semper purus faucibus sit amet.
				Suspendisse quis consectetur nulla. Phasellus tristique lectus
				nisl, in mollis urna imperdiet nec. Quisque fringilla nisl
				convallis, tempus mi vitae, interdum metus. In hac habitasse
				platea dictumst. In mi nunc, consectetur nec mi sed, volutpat
				pulvinar ipsum. Faucibus commodo massa rhoncus, volutpat.
				Dignissim sed eget risus enim. Mattis mauris semper sed amet
				vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
				risus viverra tellus varius sit neque erat velit.
			</p>

			<h3>4 col left aligned</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<div className="cu-column mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 [&:last-child]:mb-0 [&+.cu-column]:mt-8 ">
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
				<NumberCard />
			</div>

			<p>
				Phasellus et lectus elementum, dictum odio quis, euismod augue.
				Nulla ultricies orci eu volutpat mollis. Aenean mauris leo,
				congue id laoreet vitae, bibendum at dui. Proin ac aliquet enim,
				a ullamcorper tortor. Ut mattis, ante id porttitor elementum,
				lorem mauris rutrum enim, ut tristique est est at turpis. Nam
				hendrerit luctus ex, ac rhoncus mauris pretium varius. Phasellus
				dignissim sodales feugiat. Curabitur quam leo, aliquet nec risus
				quis, porta vestibulum erat.
			</p>

			<h3>4 col center aligned</h3>

			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>

			<div className="cu-column mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 [&:last-child]:mb-0 [&+.cu-column]:mt-8 ">
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
				<NumberCardCenter />
			</div>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit.
			</p>

			<ol>
				<li>Quis elit egestas venenatis mattis dignissim.</li>
				<li>
					Cras cras lobortis vitae vivamus ultricies facilisis tempus.
				</li>
				<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
			</ol>

			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit.
			</p>

			<p>
				Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
				sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
				id at vitae feugiat egestas ac. Diam nulla orci at in viverra
				scelerisque eget. Eleifend egestas fringilla sapien.
			</p>
		</>
	);
}
