import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import Question from "../components/Question";

export default function PersonalityTest() {
  let { testId } = useParams();
  let match = useRouteMatch();

  return (
    <div>
      <div className="flex justify-between">
        <Link to={"/"}>
          <div className="flex w-20 py-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
            <svg
              className="w-4 h-4 pt-px mt-1 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
                c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
                z"
              />
            </svg>
            <span className="pl-2 mt-px">Back</span>
          </div>
        </Link>
        <h2 className="text-4xl font-hairline">Personality test #{testId}</h2>
        <div className="w-20"></div>
      </div>
      <h3 className="mt-4 text-center">In general, I ...</h3>
      <div className="flex flex-col">
        <Question id={1} testId={testId} text={"Am the life of the party."} />
        <Question id={2} testId={testId} text={"Have a vivid imagination."} />
        <Question id={3} testId={testId} text={"Like order."} />
        <Question id={4} testId={testId} text={"Get chores done right away."} />
        <Link
          className="w-40 px-2 py-1 mx-auto mt-6 text-center transition-colors duration-300 ease-in-out rounded shadow hover:bg-gray-100"
          to={`${match.url}/feedback`}
        >
          Submit Answers
        </Link>
      </div>
    </div>
  );
}
