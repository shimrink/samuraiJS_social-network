import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

/*let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer
});*/

let store = configureStore({
	reducer: {
		profilePage: profileReducer,
		messagesPage: messagesReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
		form: formReducer,
		app: appReducer
	}
});

window.store = store;

export default store;