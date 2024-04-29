import { createReducer } from "@reduxjs/toolkit";

const initialStore = {
    isAuthenticated: false,
};

export const userReducer = createReducer(initialStore, builder => {
    builder
        .addCase('LoadUserRequest', (state) => {
            state.loading = true;
        })
        .addCase('LoadUserSuccess', (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        })
        .addCase('LoadUserFail', (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        })
        .addCase('clearErrors', (state) => {
            state.error = null;
        });
});
