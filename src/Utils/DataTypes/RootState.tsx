import { store } from "../../Redux/Store/Index";

export type RootState = ReturnType<typeof store.getState>;