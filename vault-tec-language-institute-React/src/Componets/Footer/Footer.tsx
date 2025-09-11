import st from './Footer.module.scss'

type Props = {}

export default function Footer({}: Props) {
	return (
		<footer className={st.root}>
			<div className={st.container}>
				<p>© 2025 Vault-Tec Language Institute. All rights reserved.</p>
				<div className={st.links}>
					<a href='/about'>About</a>
					<a href='/contact'>Contact</a>
					<a href='/privacy'>Privacy Policy</a>
				</div>
			</div>
		</footer>
	)
}
