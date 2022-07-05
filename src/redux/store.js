import { configureStore } from "@reduxjs/toolkit";
import blockSlice from "./slices/blockSlice";

export const store = configureStore({
    reducer: {
        blocks: blockSlice
    }
})

