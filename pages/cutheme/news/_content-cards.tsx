import { Column, Container } from "rds-tailwind";
import NewsCard from "../_components/News/NewsCard";

export default function NewsCardContent() {
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
			<h3>Decisions to be considered/made for Gutenberg options</h3>
			<ul>
				<li>
					Are we including options to use 2, 3 and 4 columns? If not,
					which of the three options do we feel is suitable for this
					block?
				</li>
				<li>
					If we are using the 4 column option are we using a max width
					of 6xl or 7xl?
				</li>
				<li>
					In what order should the content by as a default (eg: date,
					title, excerpt OR title, date, excerpt)
				</li>
				<li>
					Are we going to offer content reordering for this block?
					Note: not sure if/how we would do that in a user friendly
					way in the editor. Requires additional research and testing
					before confirming inclusion.
				</li>
			</ul>
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit.
			</p>
			<h3>2 col layout</h3>
			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>
			<Column cols="2">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Column>
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
				feugiat.
			</p>
			<h3>3 col layout</h3>
			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>
			<Column cols="3">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
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
				ut tristique est est at turpis.
			</p>
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
			<h3>4 col layout @ 6xl</h3>
			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>
			<Column cols="4" maxWidth="6xl">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Column>
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
			<h3>4 col layout @ 7xl</h3>
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
			<Column cols="4" maxWidth="7xl">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Column>
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
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit.
			</p>
			<h3>2 col layout</h3>
			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>
			<Container bgColor="grey">
				<Column cols="2">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
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
				feugiat.
			</p>
			<h3>3 col layout</h3>
			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>
			<Container bgColor="grey">
				<Column cols="3">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
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
			<h3>4 col layout @ 6xl</h3>
			<p>
				Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
				. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
				ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
				viverra ridiculus non molestie. Gravida quis fringilla amet eget
				dui tempor dignissim. Facilisis auctor venenatis varius nunc,
				congue erat ac. Cras fermentum convallis quam.
			</p>
			<Container bgColor="grey">
				<Column cols="4" maxWidth="6xl">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
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
			<h3>4 col layout @ 7xl</h3>
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
			<Container bgColor="grey">
				<Column cols="4" maxWidth="7xl">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</Column>
			</Container>
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
		</>
	);
}
