import { combineReducers } from "redux";
import { reducerNames } from "../utils/constants.js";
import generateItemDetailsReducer from "./ItemDetailsReducer";
import generateItemsReducer from "./ItemsReducer";
import generatePostDataReducer from "./PostDataReducer";
import generateStorageReducer from "./StorageReducer";

const reducersItemsSlices = reducerNames.reducersListData.reduce((prev, item) => ({ ...prev, [item.name]: generateItemsReducer({ ...item }) }), {});

const reducersItemDetailsSlices = reducerNames.reducersItemData.reduce((prev, item) => ({ ...prev, [item.name]: generateItemDetailsReducer({ ...item }) }), {});

const reducersStorageSlices = reducerNames.storageData.reduce((prev, item) => ({ ...prev, [item.name]: generateStorageReducer({ ...item }) }), {});

const reducersPostDataSlices = reducerNames.postData.reduce((prev, item) => ({ ...prev, [item.name]: generatePostDataReducer({ ...item }) }), {});

export const rootReducer = combineReducers(
  {
    ...Object.keys(reducersItemsSlices).reduce((prev, item) => ({ ...prev, [item]: reducersItemsSlices[item].reducer }), {}),
    ...Object.keys(reducersItemDetailsSlices).reduce((prev, item) => ({ ...prev, [item]: reducersItemDetailsSlices[item].reducer }), {}),
    ...Object.keys(reducersStorageSlices).reduce((prev, item) => ({ ...prev, [item]: reducersStorageSlices[item].reducer }), {}),
    ...Object.keys(reducersPostDataSlices).reduce((prev, item) => ({ ...prev, [item]: reducersPostDataSlices[item].reducer }), {}),
  }
);

export const listActions = Object.keys(reducersItemsSlices).reduce((prev, item) => ({ ...prev, [item]: reducersItemsSlices[item].actions }), {});
export const itemActions = Object.keys(reducersItemDetailsSlices).reduce((prev, item) => ({ ...prev, [item]: reducersItemDetailsSlices[item].actions }), {});
export const storageActions = Object.keys(reducersStorageSlices).reduce((prev, item) => ({ ...prev, [item]: reducersStorageSlices[item].actions }), {});
export const postActions = Object.keys(reducersPostDataSlices).reduce((prev, item) => ({ ...prev, [item]: reducersPostDataSlices[item].actions }), {});
