import React from "react";
import { Link } from "react-router-dom";

export default function PersonalityTestCard({ id }) {
  return (
    <div className="flex flex-col justify-between h-48 p-6 rounded shadow">
      <h2 className="text-center">Personality Test #{id}</h2>
      <Link
        className="w-16 px-2 py-1 mx-auto text-center transition-colors duration-300 ease-in-out rounded shadow hover:bg-gray-100"
        to={`/personality-test/${id}`}
      >
        Start
      </Link>
    </div>
  );
}
