let initialState = {
	friends: [
		{id: 1, name: 'Nastya'},
		{id: 2, name: 'Nikolay'},
		{id: 3, name: 'Nikita'},
	]
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;