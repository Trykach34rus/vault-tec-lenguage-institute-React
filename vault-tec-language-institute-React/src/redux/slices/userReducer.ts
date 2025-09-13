import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../axiosInstance'
import { PostT, UserT } from '../../types'
import { RootState } from '../store'

type HandleRegister = {
	fullName: string
	email: string
	password: string
}

type HandleLogin = {
	username: string
	password: string
}

interface UserState {
	userInfo: UserT | null
	accessToken: string | null
	loginError: string | null
	registerError: string | null
	userId: number | null
	profile: UserT | null
	profilePosts: PostT[]
	profileLoading: boolean
	profilePostsLoading: boolean
	isMobile: boolean
}

const initialState: UserState = {
	accessToken: null,
	userInfo: null,
	loginError: null,
	registerError: null,
	userId: null,
	profile: null,
	profilePosts: [],
	profileLoading: false,
	profilePostsLoading: false,
	isMobile: false,
}

const handleRegister = createAsyncThunk(
	'user/handleRegister',
	(data: HandleRegister) => {
		return axiosInstance.post('/users/add', data).then(res => res.data)
	}
)
const handleLogin = createAsyncThunk(
	'user/handleLogin',
	(data: HandleLogin) => {
		return axiosInstance.post('/user/login', data).then(res => res.data)
	}
)

const getCurrentUser = createAsyncThunk(
	'user/getCurrentUser',
	(_, { getState }) => {
		const state = getState()
		return axiosInstance
			.get('/user/me', {
				headers: {
					Authorization: `Bearer ${(state as RootState).user.accessToken}`,
				},
			})
			.then(res => res.data)
	}
)

const getUserById = createAsyncThunk('user/getUserById', (id: number) => {
	return axiosInstance.get(`/user/${id}`).then(res => res.data)
})

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserT>) => {
			state.userInfo = action.payload
		},
		clearToken: state => {
			state.accessToken = null
		},
		setMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(handleRegister.fulfilled, state => {
				state.registerError = null
			})
			.addCase(handleRegister.rejected, (state, action) => {
				state.registerError = action.error.message || 'Registration failed'
			})
			.addCase(handleLogin.fulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken
				state.userInfo = action.payload
				state.loginError = null
			})
			.addCase(handleLogin.rejected, (state, action) => {
				state.loginError =
					action.error.message || 'Incorrect username or password'
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.userId = action.payload.id
			})
			.addCase(getCurrentUser.rejected, state => {
				state.accessToken = null
			})
			.addCase(getUserById.pending, state => {
				state.profileLoading = true
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				state.profile = action.payload
				state.profileLoading = false
			})
	},
})

export const { setUser, clearToken, setMobile } = userSlice.actions
export { getCurrentUser, getUserById, handleLogin, handleRegister }
export default userSlice.reducer
