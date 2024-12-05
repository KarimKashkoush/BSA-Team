import { configureStore } from "@reduxjs/toolkit";

import  themeSlice  from "./themeSlice";
import rejesterSlice from "./rejesterSlice"; 

const store = configureStore({ reducer: { themeSlice, rejesterSlice } })

export default store;