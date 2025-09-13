import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import { handleLogin } from '../../redux/slices/userReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import st from './Login.module.scss'

export default function Login() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { loginError } = useAppSelector(state => state.user)

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			remember: false,
		},
		onSubmit: values => {
			dispatch(handleLogin(values)).then(action => {
				if (action.meta.requestStatus === 'fulfilled') {
					navigate('/dashboard')
				}
			})
		},
	})

	const handleCheckboxClick = () => {
		formik.setFieldValue('remember', !formik.values.remember)
	}

	return (
		<>
			<Header />
			<main className={st.root}>
				<div className={st.container}>
					<section className={`${st.terminal} ${st.loginTerminal}`}>
						<h2 className={st.vtitle}>VAULT ACCESS</h2>
						<p className={st.muted}>Enter Vault ID and Access Code</p>

						<form onSubmit={formik.handleSubmit} className={st.loginForm}>
							<label className={st.muted}>VAULT ID</label>
							<input
								className={st.input}
								type='text'
								name='username'
								placeholder='Vault ID'
								required
								value={formik.values.username}
								onChange={formik.handleChange}
							/>

							<label className={st.muted}>ACCESS CODE</label>
							<input
								className={st.input}
								type='password'
								name='password'
								placeholder='Access code'
								required
								value={formik.values.password}
								onChange={formik.handleChange}
							/>

							<div className={st.checkboxContainer}>
								<div
									className={`${st.checkbox} ${
										formik.values.remember ? st.checked : ''
									}`}
									onClick={handleCheckboxClick}
								></div>
								<span className={st.muted}>Remember this terminal</span>
							</div>

							{loginError && <div className={st.error}>{loginError}</div>}

							<button
								type='submit'
								className={`${st.btn} ${st.submitBtn}`}
								disabled={formik.isSubmitting}
								// onClick={() => navigate('/dashboard')}
							>
								{formik.isSubmitting ? 'AUTHORIZING...' : 'AUTHORIZE'}
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
