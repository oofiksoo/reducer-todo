export const initialState = {
  title: "Click here to set List Name",
  editing: false
};

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    // NEW CASE HERE
    case "TOGGLE_EDIT":
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};
