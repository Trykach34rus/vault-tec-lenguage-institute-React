// SignUp.tsx
import { useFormik } from 'formik'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import { handleRegister } from '../../redux/slices/userReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import st from './SignUp.module.scss'

interface FormData {
	email: string
	vaultId: string
	password: string
}

export default function SignUp() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { registerError } = useAppSelector(state => state.user) // ИЗМЕНЕНИЕ: берем только registerError

	const formik = useFormik({
		initialValues: {
			email: '',
			vaultId: '',
			password: '',
		},
		validate: values => {
			const errors: Partial<FormData> = {}

			if (!values.email) {
				errors.email = 'Email is required'
			} else if (!/\S+@\S+\.\S+/.test(values.email)) {
				errors.email = 'Email is invalid'
			}

			if (!values.vaultId) {
				errors.vaultId = 'Vault ID is required'
			} else if (values.vaultId.length < 3) {
				errors.vaultId = 'Vault ID must be at least 3 characters'
			}

			if (!values.password) {
				errors.password = 'Password is required'
			} else if (values.password.length < 6) {
				errors.password = 'Password must be at least 6 characters'
			}

			return errors
		},
		onSubmit: values => {
			dispatch(
				handleRegister({
					fullName: values.vaultId,
					email: values.email,
					password: values.password,
				})
			).then(action => {
				if (action.meta.requestStatus === 'fulfilled') {
					navigate('/login')
				}
			})
		},
	})

	return (
		<>
			<Header />
			<div className={st.root}>
				<main className={st.main}>
					<section className={st.terminal}>
						<div className={st.header}>
							<h2 className={st.title}>JOIN VAULT 73</h2>
							<p className={st.subtitle}>
								Create your account to access retro-futuristic AI language
								learning
							</p>
						</div>

						<form onSubmit={formik.handleSubmit} className={st.form}>
							<div className={st.formGroup}>
								<label className={st.label}>
									<FiMail className={st.labelIcon} />
									Email Address
								</label>
								<input
									type='email'
									name='email'
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={st.input}
									placeholder='Enter your email'
									disabled={formik.isSubmitting}
								/>
								{formik.touched.email && formik.errors.email && (
									<span className={st.error}>{formik.errors.email}</span>
								)}
							</div>
							<div className={st.formGroup}>
								<label className={st.label}>
									<FiUser className={st.labelIcon} />
									Vault ID
								</label>
								<input
									type='text'
									name='vaultId'
									value={formik.values.vaultId}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={st.input}
									placeholder='Choose your Vault ID'
									disabled={formik.isSubmitting}
								/>
								{formik.touched.vaultId && formik.errors.vaultId && (
									<span className={st.error}>{formik.errors.vaultId}</span>
								)}
							</div>
							<div className={st.formGroup}>
								<label className={st.label}>
									<FiLock className={st.labelIcon} />
									Password
								</label>
								<input
									type='password'
									name='password'
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={st.input}
									placeholder='Create secure password'
									disabled={formik.isSubmitting}
								/>
								{formik.touched.password && formik.errors.password && (
									<span className={st.error}>{formik.errors.password}</span>
								)}
							</div>
							{registerError && <div className={st.error}>{registerError}</div>}{' '}
							{/* ИСПРАВЛЕНО */}
							<button
								type='submit'
								disabled={formik.isSubmitting}
								className={st.submitButton}
							>
								{formik.isSubmitting ? (
									<>
										<div className={st.spinner}></div>
										CREATING ACCOUNT...
									</>
								) : (
									'CREATE ACCOUNT'
								)}
							</button>
						</form>

						<div className={st.footer}>
							<p className={st.loginText}>
								Already have an account?{' '}
								<Link to='/login' className={st.loginLink}>
									Sign in here
								</Link>
							</p>

							<Link to='/' className={st.backLink}>
								<FiArrowLeft className={st.backIcon} />
								Back to Home
							</Link>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</>
	)
}
