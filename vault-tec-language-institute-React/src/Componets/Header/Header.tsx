import { useNavigate } from 'react-router-dom'
import st from './Header.module.scss'

type Props = {}

export default function Header({}: Props) {
	const navigate = useNavigate()

	return (
		<header className={st.root}>
			<div className={st.brand}>
				<svg
					className={st.logo}
					viewBox='0 0 24 24'
					fill='none'
					stroke='#39ff14'
					strokeWidth='2'
				>
					<circle cx='12' cy='12' r='10'></circle>
					<line x1='12' y1='8' x2='12' y2='12'></line>
				</svg>
				<h1>VAULT-TEC LANGUAGE INSTITUTE</h1>
			</div>
			<div className={st.navActions}>
				<button
					className={`${st.btn} ${st.btnGhost}`}
					onClick={() => navigate('/login')}
				>
					Login
				</button>
				<button className={st.btn} onClick={() => navigate('/signup')}>
					Sign Up
				</button>
			</div>
		</header>
	)
}
