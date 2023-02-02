import { configureStore } from "@reduxjs/toolkit";
import states from "./reducers";

export default configureStore({
  reducer: { states },
});
