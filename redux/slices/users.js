import {
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
	name: 'users',
	initialState: usersAdapter.getInitialState(),
	reducers: {
		usersAddOne: usersAdapter.addOne,
		userUpdate: usersAdapter.updateOne,
	},
});


// Actions
export const { usersAddOne, userUpdate } = usersSlice.actions;

export const userSelectors = usersAdapter.getSelectors((state) => state.users);
// Selectors
export const allUsers = userSelectors.selectAll;

export default usersSlice.reducer;