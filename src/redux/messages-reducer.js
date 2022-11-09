const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
	]
}

const messagesReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE:
			let newMessage = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: newMessage}],
			};
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default messagesReducer;