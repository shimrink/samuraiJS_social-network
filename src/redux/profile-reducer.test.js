import React from "react";
import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('length of posts should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator('it-kamasutra.com')
	let state = {
		posts: [
			{id: 1, message: 'Hey, why nobody love me?', likesCount: 15},
			{id: 2, message: 'It\'s our new program! Hey!', likesCount: 30}
		]
	}
	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(5)
})