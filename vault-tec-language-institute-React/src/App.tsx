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

export default function App() {
	return (
		<div className='app-container'>
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/about' element={<About />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/chat' element={<Chat />} />
					<Route path='/speech' element={<Speech />} />
					<Route path='/check' element={<Check />} />
					<Route path='/exercises' element={<Exercises />} />
					<Route path='/progress' element={<Progress />} />
				</Routes>
			</div>
		</div>
	)
}
