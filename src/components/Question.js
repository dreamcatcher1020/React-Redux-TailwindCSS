import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "../actions";

export default function Question({ id, testId, text }) {
  const answers = useSelector((state) => state.answers);
  const dispatch = useDispatch();

  return (
    <div className="py-6">
      <div className="w-5/12 px-2 py-1 border rounded">
        {id}. {text}
      </div>
      <div className="flex px-6 py-1 mt-4 space-x-8 clex-col">
        <div>
          <input
            onChange={(e) => dispatch(setAnswer(id, testId, e.target.value))}
            type="radio"
            id="disagree"
            name={id}
            value="disagree"
            checked={
              answers.find((a) => a.id === id && a.testId === testId)?.text ===
              "disagree"
            }
          />
          <label className="pl-2" htmlFor="disagree">
            I disagree
          </label>
        </div>

        <div>
          <input
            onChange={(e) => dispatch(setAnswer(id, testId, e.target.value))}
            type="radio"
            id="neither"
            name={id}
            value="neither"
            checked={
              answers.find((a) => a.id === id && a.testId === testId)?.text ===
              "neither"
            }
          />
          <label className="pl-2" htmlFor="neither">
            I neither agree nor disagree
          </label>
        </div>

        <div>
          <input
            onChange={(e) => dispatch(setAnswer(id, testId, e.target.value))}
            type="radio"
            id="agree"
            name={id}
            value="agree"
            checked={
              answers.find((a) => a.id === id && a.testId === testId)?.text ===
              "agree"
            }
          />
          <label className="pl-2" htmlFor="agree">
            I agree
          </label>
        </div>
      </div>
    </div>
  );
}
