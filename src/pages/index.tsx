import React from "react";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";

type Props = {};

function index({}: Props) {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-20">
        <Hero />
      </main>
    </div>
  );
}

export default index;
