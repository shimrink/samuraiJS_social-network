import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hey, why nobody love me?', likesCount: 15},
				{id: 2, message: 'It\'s our new program! Hey!', likesCount: 30},
			],
			newPostText: 'it-kamasutra.com',
		},
	
		messagesPage: {
			dialogs: [
				{id: 1, name: 'Dimych'},
				{id: 2, name: 'Andrew'},
				{id: 3, name: 'Nikolay'},
				{id: 4, name: 'Nastya'},
				{id: 5, name: 'Elena'},
				{id: 6, name: 'Nikita'},
			],
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'Hello!'},
				{id: 3, message: 'How are you?'},
				{id: 4, message: 'Beautiful'},
			],
			newMessageText: 'it-kamasutra.com',
		},
	
		sidebar: {
			friends: [
				{id: 1, name: 'Nastya'},
				{id: 2, name: 'Nikolay'},
				{id: 3, name: 'Nikita'},
			],
		},
	},

	_callSubscriber() {
		console.log('State changed')
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	},
}

export default store;

window.store = store;