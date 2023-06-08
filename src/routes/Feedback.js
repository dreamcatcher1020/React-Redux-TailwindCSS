import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Feedback() {
  const answers = useSelector((state) => state.answers);
  const { testId } = useParams();
  const currentTestAnswers = answers.filter((a) => a.testId === testId);

  return (
    <div>
      <div className="flex justify-center ">
        <h2 className="text-4xl font-hairline">
          Personality test #{testId} Feedback
        </h2>
      </div>
      <div className="flex flex-col mt-6">
        {currentTestAnswers.length === 0 && (
          <div>Try giving some answers first ^^</div>
        )}
        {currentTestAnswers
          .sort((x, y) => x.id - y.id)
          .map((a) => {
            return (
              <div key={a.id}>
                q: {a.id} -> hmm, "{a.text}" interesting...
              </div>
            );
          })}
        <Link
          className="w-32 px-2 py-1 mx-auto mt-16 text-center transition-colors duration-300 ease-in-out rounded shadow hover:bg-gray-100"
          to={`/`}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
