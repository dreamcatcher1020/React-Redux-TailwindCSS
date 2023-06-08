import React from "react";
import PersonalityTestCard from "../components/PersonalityTestCard";

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl font-hairline">Home</h2>
      <p>Welcome back! What about a little test?</p>
      <ul className="grid grid-cols-1 row-gap-8 mt-6 sm:grid-cols-2 md:grid-cols-3 sm:col-gap-8 md:col-gap-10 lg:col-gap-12">
        <PersonalityTestCard id={1} />
        <PersonalityTestCard id={2} />
        <PersonalityTestCard id={3} />
        <PersonalityTestCard id={4} />
        <PersonalityTestCard id={5} />
        <PersonalityTestCard id={6} />
      </ul>
    </div>
  );
}
