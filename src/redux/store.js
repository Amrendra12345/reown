import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@/redux/rootReducer";
//import { persistReducer, persistStore } from 'redux-persist';
//import storage from "redux-persist/lib/storage"
// import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

const initialState = {};
//const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer,
    //RootReducer : persistedReducer,
    initialState: initialState,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({serializableCheck:false})
    }
})

//export const persistor = persistStore(store)

