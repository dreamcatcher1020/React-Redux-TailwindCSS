export default function answersReducer(state = [], action) {
  switch (action.type) {
    case "set_answer":
      state = state.filter(
        (a) =>
          a !==
          state.find((a) => a.id === action.id && a.testId === action.testId)
      );

      return [
        ...state,
        { id: action.id, testId: action.testId, text: action.text },
      ];

    default:
      return state;
  }
}
