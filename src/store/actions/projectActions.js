import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
export const createProject = (project) => {
  return (dispatch) => {
    addDoc(collection(db, "projects"), {
      ...project,
      authorFirstName: "Jay",
      authorLastName: "Bee",
      authorId: 12345,
      createdAt: new Date(),
    })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", payload: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", payload: err });
      });
  };
};
