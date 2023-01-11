import { projects } from "../../config/firebaseConfig";

const initState = { projects };

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.payload);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
