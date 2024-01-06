import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthSerices from "../services/AuthServices";
import axios from "axios";
import { API_URL } from "../http";

const userInitialState = {
    status: null,
    error: null,
    user: null,
    isAuth: false,
}

export const login = createAsyncThunk(
    "user/login",
    async function ({ email, password }, { rejectWithValue }) {
        try {
            const response = await AuthSerices.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            console.log(response);
            return {
                isAuth: true,
                user: response.data.user
            };
        } catch (e) {
            return rejectWithValue(e.response?.data?.message);
        }
    }
);

export const registration = createAsyncThunk(
    "user/registration",
    async function ({ name, email, password }, { rejectWithValue }) {
        try {
            const response = await AuthSerices.registration(name, email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            return {
                isAuth: true,
                user: response.data.user
            };
        } catch (e) {
            return rejectWithValue(e.response?.data?.message);
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthSerices.logout();
            console.log(response);
            localStorage.removeItem("token");
            return {
                isAuth: false,
                user: null
            };
        } catch (e) {
            return rejectWithValue(e.response?.data?.message);
        }
    }
);

export const chechAuth = createAsyncThunk(
    "user/checkAuth",
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            return {
                isAuth: true,
                user: response.data.user
            };
        } catch (e) {
            return rejectWithValue(e.response?.data?.errors);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(registration.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(registration.fulfilled, (state, action) => {
            state.status = "resolved";
            state.error = null;
            const { isAuth, user } = action.payload;
            state.user = user;
            state.isAuth = isAuth;
        })
        builder.addCase(login.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = "resolved";
            state.error = null;
            const { isAuth, user } = action.payload;
            state.user = user;
            state.isAuth = isAuth;
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.status = "resolved";
            state.error = null;
            const { isAuth, user } = action.payload;
            state.user = user;
            state.isAuth = isAuth;
        })
        builder.addCase(chechAuth.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(chechAuth.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        builder.addCase(chechAuth.fulfilled, (state, action) => {
            state.status = "resolved";
            const { isAuth, user } = action.payload;
            state.error = null;
            state.user = user;
            state.isAuth = isAuth;
        })
    }
});

export default userSlice;