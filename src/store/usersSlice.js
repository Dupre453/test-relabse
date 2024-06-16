import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const initialState = {
    users: [],
    isLoading: false,
    error: null,
    totalPages: 1,
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page) => {
        const limit = 5;
        const offset = (page - 1) * limit;
        const response = await fetch(
            `https://test.dev-relabs.ru/api/users/list?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();
        return data;
    }
);

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload.items;
                state.isLoading = false;
                state.totalPages = Math.ceil(
                    action.payload.total / action.payload.limit
                );
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },
});

export const {deleteUser} = userSlice.actions;
export const selectUsers = (state) => state.users.users;
export const selectUsersLoading = (state) => state.users.isLoading;
export const selectUsersError = (state) => state.users.error;
export const selectTotalPages = (state) => state.users.totalPages;

export default userSlice.reducer;