import { useState } from 'react'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import st from './SignUp.module.scss'

interface FormData {
	email: string
	vaultId: string
	password: string
}

export default function SignUp() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState<FormData>({
		email: '',
		vaultId: '',
		password: '',
	})
	const [isLoading, setIsLoading] = useState(false)
	const [errors, setErrors] = useState<Record<string, string>>({})

	const validateForm = () => {
		const newErrors: Record<string, string> = {}

		if (!formData.email) {
			newErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid'
		}

		if (!formData.vaultId) {
			newErrors.vaultId = 'Vault ID is required'
		} else if (formData.vaultId.length < 3) {
			newErrors.vaultId = 'Vault ID must be at least 3 characters'
		}

		if (!formData.password) {
			newErrors.password = 'Password is required'
		} else if (formData.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!validateForm()) return

		setIsLoading(true)

		// Имитация регистрации
		setTimeout(() => {
			setIsLoading(false)
			navigate('/dashboard')
		}, 1500)
	}

	const handleInputChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
		if (errors[field]) {
			setErrors(prev => ({ ...prev, [field]: '' }))
		}
	}

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

						<form onSubmit={handleSubmit} className={st.form}>
							<div className={st.formGroup}>
								<label className={st.label}>
									<FiMail className={st.labelIcon} />
									Email Address
								</label>
								<input
									type='email'
									value={formData.email}
									onChange={e => handleInputChange('email', e.target.value)}
									className={st.input}
									placeholder='Enter your email'
									disabled={isLoading}
								/>
								{errors.email && (
									<span className={st.error}>{errors.email}</span>
								)}
							</div>

							<div className={st.formGroup}>
								<label className={st.label}>
									<FiUser className={st.labelIcon} />
									Vault ID
								</label>
								<input
									type='text'
									value={formData.vaultId}
									onChange={e => handleInputChange('vaultId', e.target.value)}
									className={st.input}
									placeholder='Choose your Vault ID'
									disabled={isLoading}
								/>
								{errors.vaultId && (
									<span className={st.error}>{errors.vaultId}</span>
								)}
							</div>

							<div className={st.formGroup}>
								<label className={st.label}>
									<FiLock className={st.labelIcon} />
									Password
								</label>
								<input
									type='password'
									value={formData.password}
									onChange={e => handleInputChange('password', e.target.value)}
									className={st.input}
									placeholder='Create secure password'
									disabled={isLoading}
								/>
								{errors.password && (
									<span className={st.error}>{errors.password}</span>
								)}
							</div>

							<button
								type='submit'
								disabled={isLoading}
								className={st.submitButton}
							>
								{isLoading ? (
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
