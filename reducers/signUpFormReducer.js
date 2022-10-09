const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "department":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "branch":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "roll_number":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "pubKey":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "email":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "role":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return {
        ...state,
      }
  }
};
const formInitialState = {
  name: "",
  department: "",
  branch: "",
  roll_number: "",
  pubKey: "",
  email: "",
  role: "",
};

export { formInitialState };
export default signUpFormReducer;
