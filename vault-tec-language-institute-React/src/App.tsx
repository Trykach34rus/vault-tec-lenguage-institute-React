import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About.tsx'
import Chat from './Pages/Chat/Chat.tsx'
import Check from './Pages/Check/Check.tsx'
import Dashboard from './Pages/Dashboard/Dashboard.tsx'
import Exercises from './Pages/Exercises/Exercises.tsx'
import Home from './Pages/Home/Home.tsx'
import Login from './Pages/Login/Login.tsx'
import Progress from './Pages/Progress/Progress.tsx'
import Signup from './Pages/Signup/Signup.tsx'
import Speech from './Pages/Speech/Speech.tsx'
import ProtectedRoute from './ProtectedRoute.tsx'

export default function App() {
	return (
		<div className='app-container'>
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/about' element={<About />} />
					<Route
						path='/dashboard'
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/chat'
						element={
							<ProtectedRoute>
								<Chat />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/speech'
						element={
							<ProtectedRoute>
								<Speech />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/check'
						element={
							<ProtectedRoute>
								<Check />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/exercises'
						element={
							<ProtectedRoute>
								<Exercises />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/progress'
						element={
							<ProtectedRoute>
								<Progress />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</div>
		</div>
	)
}
