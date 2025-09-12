import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import st from './Login.module.scss'

interface FormData {
	username: string
	password: string
	remember: boolean
}

export default function Login() {
	const [formData, setFormData] = useState<FormData>({
		username: '',
		password: '',
		remember: false,
	})
	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Логика авторизации
		console.log('Login attempt:', formData)
		// Здесь будет редирект на dashboard после успешной авторизации
	}

	const handleCheckboxClick = () => {
		setFormData(prev => ({ ...prev, remember: !prev.remember }))
	}

	return (
		<>
			<Header />
			<main className={st.root}>
				<div className={st.container}>
					<section className={`${st.terminal} ${st.loginTerminal}`}>
						<h2 className={st.vtitle}>VAULT ACCESS</h2>
						<p className={st.muted}>Enter Vault ID and Access Code</p>

						<form onSubmit={handleSubmit} className={st.loginForm}>
							<label className={st.muted}>VAULT ID</label>
							<input
								className={st.input}
								type='text'
								name='username'
								placeholder='Vault ID'
								required
								value={formData.username}
								onChange={e =>
									setFormData({ ...formData, username: e.target.value })
								}
							/>

							<label className={st.muted}>ACCESS CODE</label>
							<input
								className={st.input}
								type='password'
								name='password'
								placeholder='Access code'
								required
								value={formData.password}
								onChange={e =>
									setFormData({ ...formData, password: e.target.value })
								}
							/>

							<div className={st.checkboxContainer}>
								<div
									className={`${st.checkbox} ${
										formData.remember ? st.checked : ''
									}`}
									onClick={handleCheckboxClick}
								></div>
								<span className={st.muted}>Remember this terminal</span>
							</div>

							<button
								className={`${st.btn} ${st.submitBtn}`}
								onClick={() => navigate('/dashboard')}
							>
								AUTHORIZE
							</button>

							<p className={st.registerText}>
								New dweller?
								<Link to='/signup' className={st.registerLink}>
									Register
								</Link>
							</p>
						</form>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}
