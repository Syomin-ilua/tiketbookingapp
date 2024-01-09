import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthSerices from "../services/AuthServices";
import axios from "axios";
import { API_URL } from "../http";
import UserServices from "../services/UserServices";

const userInitialState = {
    error: null,
    user: null,
    isAuth: false,
}

export const login = createAsyncThunk(
    "user/login",
    async function ({ email, password }, { rejectWithValue }) {
        try {
            const response = await AuthSerices.login(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            return {
                isAuth: true,
                user: response.data.user,
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
                user: response.data.user,
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
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true});
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            return {
                isAuth: true,
                user: response.data.user,
            };
        } catch (e) {
            return rejectWithValue(e.response?.data?.message);
        }
    }
)

export const changeAccount = createAsyncThunk(
    "user/changeAccount",
    async function ({ id, name, surname, patronymic, dateOfBirth, tel }, { rejectWithValue }) {
        try {
            const response = await UserServices.changeAccount(id, name, surname, patronymic, dateOfBirth, tel);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            return response.data.user;
        } catch (e) {
            return rejectWithValue(e.response?.data?.error);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        logout(action, state) {
            localStorage.removeItem("token");
            state.user = null;
            state.isAuth = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(registration.rejected, (state, action) => {
            state.status = "rejected";
            const error = action.payload;
            state.error = error;
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
            const error = action.payload;
            state.error = error;
        })
        builder.addCase(login.fulfilled, (state, action) => {
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
            const error = action.payload;
            state.error = error;
        })
        builder.addCase(chechAuth.fulfilled, (state, action) => {
            state.status = "resolved";
            const { isAuth, user } = action.payload;
            state.error = null;
            state.user = user;
            state.isAuth = isAuth;
        });
        builder.addCase(changeAccount.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(changeAccount.rejected, (state, action) => {
            state.status = "rejected";
            const error = action.payload;
            state.error = error;
        });
        builder.addCase(changeAccount.fulfilled, (state, action) => {
            state.status = "resolved";
            const user = action.payload;
            state.error = null;
            state.user = user;
        });
    }
});

export const userActions = userSlice.actions;
export default userSlice;