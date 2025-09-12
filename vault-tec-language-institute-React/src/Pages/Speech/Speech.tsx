import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import Sidebar from '../../Componets/Sidebar/Sidebar'
import st from './Speech.module.scss'

export default function SpeechTrainer() {
	const navigate = useNavigate()
	const [transcript, setTranscript] = useState('')
	const [score, setScore] = useState<number | null>(null)

	const referencePhrase = 'The quick brown fox jumps over the lazy dog.'

	const resetTest = () => {
		setTranscript('')
		setScore(null)
	}

	return (
		<>
			<Header />
			<div className={st.root}>
				<Sidebar />
				<main className={st.main}>
					<div className={st.container}>
						<section className={st.terminal}>
							<h2 className={st.title}>Pronunciation Test</h2>
							<p className={st.subtitle}>
								Read the phrase aloud and practice your pronunciation.
							</p>

							<div className={st.phraseContainer}>
								<div className={st.referencePhrase}>"{referencePhrase}"</div>

								<div className={st.controls}>
									<button
										onClick={resetTest}
										className={`${st.button} ${st.resetButton}`}
									>
										Reset
									</button>
								</div>

								<div className={st.results}>
									<div className={st.transcript}>
										<strong>Practice phrase:</strong> {referencePhrase}
									</div>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
