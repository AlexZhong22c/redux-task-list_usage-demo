// (state, action) => newState
export default function taskReducer(
  state = {
    list: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "init":
      return { ...state, list: action.payload };
    case "add":
      return { ...state, list: [...state.list, action.payload] };
    case "loading_start":
      return { ...state, loading: true };
    case "loading_end":
      return { ...state, loading: false };
    default:
      return state;
  }
}