import { Link } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import st from './About.module.scss'

export default function About() {
	return (
		<>
			<Header />
			<main className={st.root}>
				<div className={st.container}>
					<section className={st.terminal}>
						<h2 className={st.vtitle}>About the Project</h2>
						<p className={st.muted}>
							Retro-futuristic online school inspired by Fallout UI. Core
							modules:
						</p>

						<ul className={st.featuresList}>
							<li>AI Tutor (chat)</li>
							<li>Speech Trainer (Web Speech / Whisper)</li>
							<li>Writing Scanner (essay corrections)</li>
							<li>Exercises generator & adaptive plans</li>
						</ul>

						<p className={st.muted}>
							Design: VT323 font, scanlines, green mono UI, terminal panels.
						</p>

						<div className={st.authorSection}>
							<h3 className={st.subtitle}>About the Author</h3>
							<div className={st.authorInfo}>
								<div className={st.authorItem}>
									<span className={st.authorLabel}>Name:</span>
									<span className={st.authorValue}>Andranik Ratushnyak</span>
								</div>
								<div className={st.authorItem}>
									<span className={st.authorLabel}>Role:</span>
									<span className={st.authorValue}>
										Junior Frontend Developer
									</span>
								</div>
								<div className={st.authorItem}>
									<span className={st.authorLabel}>Inspiration:</span>
									<span className={st.authorValue}>
										Inspired by Fallout 4, I created this application for
										foreign language learning
									</span>
								</div>
							</div>
						</div>

						<div className={st.ctaSection}>
							<Link to='/signup' className={st.ctaButton}>
								Join the Vault Today
							</Link>
							<Link to='/' className={st.secondaryButton}>
								Back to Home
							</Link>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}
