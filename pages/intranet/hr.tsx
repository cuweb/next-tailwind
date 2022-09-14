import type { NextPage } from "next";
import Navbar from "../../components/Intranet/Navbar";

const hr: NextPage = () => {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:py-10 lg:px-8">
        <h1 className="text-cu-black:900 text-3xl font-medium tracking-tight">
          HR
        </h1>
      </div>
    </>
  );
};

export default hr;
