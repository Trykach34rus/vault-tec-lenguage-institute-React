import { useState } from 'react'
import { FiAlertCircle, FiCheck, FiEdit } from 'react-icons/fi'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import Sidebar from '../../Componets/Sidebar/Sidebar'
import st from './Check.module.scss'

export default function WritingScanner() {
	// const navigate = useNavigate()
	const [inputText, setInputText] = useState<string>('')
	const [correctedText, setCorrectedText] = useState<string>('')
	const [errors, setErrors] = useState<string[]>([])
	const [isChecking, setIsChecking] = useState<boolean>(false)

	const commonErrors = {
		teh: 'the',
		recieve: 'receive',
		seperate: 'separate',
		definately: 'definitely',
		accomodate: 'accommodate',
		alot: 'a lot',
		untill: 'until',
		occured: 'occurred',
		comming: 'coming',
		truely: 'truly',
	}

	const checkText = () => {
		if (!inputText.trim()) return

		setIsChecking(true)

		// Имитация обработки
		setTimeout(() => {
			let corrected = inputText
			const foundErrors: string[] = []

			// Проверка на распространенные ошибки
			Object.entries(commonErrors).forEach(([error, correction]) => {
				const regex = new RegExp(`\\b${error}\\b`, 'gi')
				if (regex.test(corrected)) {
					corrected = corrected.replace(regex, correction)
					foundErrors.push(`"${error}" → "${correction}"`)
				}
			})

			// Проверка двойных пробелов
			if (/\s{2,}/.test(corrected)) {
				corrected = corrected.replace(/\s{2,}/g, ' ')
				foundErrors.push('Double spaces removed')
			}

			// Проверка заглавных букв после точек
			corrected = corrected.replace(/\.\s+([a-z])/g, (_, letter) => {
				return `. ${letter.toUpperCase()}`
			})

			setCorrectedText(corrected)
			setErrors(foundErrors)
			setIsChecking(false)
		}, 1000)
	}

	const clearText = () => {
		setInputText('')
		setCorrectedText('')
		setErrors([])
	}

	const copyCorrectedText = () => {
		navigator.clipboard.writeText(correctedText)
	}

	return (
		<>
			<Header />
			<div className={st.root}>
				<Sidebar />
				<main className={st.main}>
					<div className={st.container}>
						<section className={st.terminal}>
							<h2 className={st.title}>Writing Scanner</h2>
							<p className={st.subtitle}>
								Paste your text below. The AI will scan for common errors and
								suggest corrections.
							</p>

							<div className={st.editor}>
								<div className={st.inputSection}>
									<h3 className={st.sectionTitle}>Your Text</h3>
									<textarea
										value={inputText}
										onChange={e => setInputText(e.target.value)}
										placeholder='Type or paste your text here...'
										className={st.textArea}
										rows={8}
									/>
									<div className={st.actions}>
										<button
											onClick={checkText}
											disabled={!inputText.trim() || isChecking}
											className={st.checkButton}
										>
											<FiCheck className={st.buttonIcon} />
											{isChecking ? 'Scanning...' : 'Scan Text'}
										</button>
										<button onClick={clearText} className={st.clearButton}>
											Clear
										</button>
									</div>
								</div>

								<div className={st.outputSection}>
									<h3 className={st.sectionTitle}>Corrected Text</h3>
									<div className={st.correctedText}>
										{correctedText || (
											<div className={st.placeholder}>
												<FiEdit className={st.placeholderIcon} />
												Corrected text will appear here
											</div>
										)}
									</div>
									{correctedText && (
										<button
											onClick={copyCorrectedText}
											className={st.copyButton}
										>
											Copy Corrected Text
										</button>
									)}
								</div>
							</div>

							{errors.length > 0 && (
								<div className={st.errorsSection}>
									<h3 className={st.sectionTitle}>Detected Errors</h3>
									<div className={st.errorsList}>
										{errors.map((error, index) => (
											<div key={index} className={st.errorItem}>
												<FiAlertCircle className={st.errorIcon} />
												{error}
											</div>
										))}
									</div>
								</div>
							)}
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
