import {
	FiActivity,
	FiBook,
	FiEdit,
	FiHome,
	FiLogOut,
	FiMessageSquare,
	FiMic,
} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import st from './Sidebar.module.scss'

export default function Sidebar() {
	const location = useLocation()

	const navItems = [
		{ path: '/dashboard', label: 'Dashboard', icon: <FiHome size={18} /> },
		{ path: '/chat', label: 'AI Tutor', icon: <FiMessageSquare size={18} /> },
		{ path: '/speech', label: 'Speech Trainer', icon: <FiMic size={18} /> },
		{ path: '/check', label: 'Writing Scanner', icon: <FiEdit size={18} /> },
		{ path: '/exercises', label: 'Exercises', icon: <FiBook size={18} /> },
		{ path: '/progress', label: 'Progress', icon: <FiActivity size={18} /> },
	]

	const handleLogout = () => {
		// Логика выхода
		console.log('Logout clicked')
	}

	return (
		<aside className={st.root}>
			<div className={st.brand}>
				<svg
					className={st.logo}
					viewBox='0 0 24 24'
					fill='none'
					stroke='#39ff14'
					strokeWidth='2'
				>
					<circle cx='12' cy='12' r='10' />
				</svg>
				<h1>VAULT-TEC LANGUAGE INSTITUTE</h1>
			</div>

			<div className={st.navActions}>
				<div className={st.muted}>
					Welcome, <span className={st.userName}>Dweller #4271</span>
				</div>
				<button
					className={`${st.btn} ${st.btnGhost}`}
					onClick={handleLogout}
					title='Logout'
				>
					<FiLogOut size={16} />
				</button>
			</div>

			<nav className={st.links}>
				<div className={st.sidebarLinks}>
					{navItems.map(item => (
						<Link
							key={item.path}
							to={item.path}
							className={`${st.navLink} ${
								location.pathname === item.path ? st.active : ''
							}`}
						>
							<span className={st.icon}>{item.icon}</span>
							<span className={st.label}>{item.label}</span>
						</Link>
					))}
				</div>
			</nav>
		</aside>
	)
}
