import { useNavigate } from 'react-router-dom'
import st from './Footer.module.scss'

type Props = {}

export default function Footer({}: Props) {
	const navigate = useNavigate()
	return (
		<footer className={st.root}>
			<div className={st.container}>
				<p>© 2025 Vault-Tec Language Institute. All rights reserved.</p>
				<div className={st.links}>
					<button onClick={() => navigate('/About')}>About</button>
					<p>Contact</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</footer>
	)
}
