import type { NextPage } from "next";
import React from "react";
import Navbar from "../../components/Intranet/Navbar";
import Profile from "../../components/Intranet/Profile";

const newsfeed: NextPage = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:py-10 lg:px-8">
        <h1 className="text-cu-black:900 text-3xl font-medium tracking-tight">
          Community & News
        </h1>
      </div>
    </>
  );
};

export default newsfeed;
