import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/FooterStandard";
import Navbar from "../../components/EventCalendar/Navbar";
import Container from "../../build-files/layouts/Container/Container";
import Columns from "../../build-files/layouts/Columns/Columns";
import FeaturedEvents from "../../components/EventCalendar/FeaturedEvents";
import EventCard from "../../components/Cards/EventCard";
import EventFilter from "../../components/EventCalendar/EventFilter";
import EventWithDatePicker from "../../components/EventCalendar/EventWithDatePicker";
const EventCalendar: NextPage = () => {
  return (
    <>
      <Head>
        <title>Event Calendar | Carleton University</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <header className="mx-auto max-w-4xl px-8 py-12">
        <h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
          Grids &amp; Layouts
        </h1>
      </header>

      <main>
        <Container bgColor="gray">
          <Columns columns="sm:grid-cols-2 lg:grid-cols-4" maxWidth="7xl">
            <EventCard title="" content="" />
            <EventCard
              title="Sed sollicitudin orci nisi, non tempus risus posuere vel"
              content=""
            />
            <EventCard
              title=""
              content="Suspendisse sed nibh non lorem ultrices auctor. Phasellus eget leo enim. Donec sit amet venenatis mi. Sed interdum nibh quis quam hendrerit tincidunt. Donec quis consectetur augue. Maecenas non felis malesuada, aliquet risus eget, consectetur leo. Sed fringilla at nisl nec rutrum."
            />
            <EventCard title="" content="" />
          </Columns>
        </Container>
        <EventFilter />
        <EventWithDatePicker />
        {/* <FeaturedEvents /> */}
        {/* <Featured /> */}
      </main>

      <Footer />
    </>
  );
};

export default EventCalendar;
