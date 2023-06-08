const setAnswer = (id, testId, text) => {
  return {
    type: "set_answer",
    id: id,
    testId: testId,
    text: text,
  };
};

export { setAnswer };
