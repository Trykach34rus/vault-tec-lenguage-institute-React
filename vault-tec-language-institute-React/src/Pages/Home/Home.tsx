import { FiAward, FiBook, FiMessageSquare, FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import st from './Home.module.scss'

export default function Home() {
	const navigate = useNavigate()
	return (
		<>
			<Header />
			<main className={st.root}>
				<section className={st.hero}>
					<div className={st.heroContent}>
						<div className={st.terminalGlitch}>
							<h1 className={st.heroTitle}>
								WELCOME TO <span className={st.vaultAccent}>VAULT 73</span>
							</h1>
							<p className={st.heroSubtitle}>
								RETRO-FUTURISTIC AI LANGUAGE INSTITUTE
							</p>
						</div>

						<div className={st.terminalAnimation}>
							<div className={st.terminalScreen}>
								<div className={st.terminalText}>
									<span className={st.terminalPrompt}>
										&gt; Initializing Vault-Tec systems...
									</span>
									<span className={st.terminalPrompt}>
										&gt; AI tutors online...
									</span>
									<span className={st.terminalPrompt}>
										&gt; Ready for language acquisition
									</span>
								</div>
							</div>
						</div>

						<p className={st.heroDescription}>
							Join thousands of vault dwellers mastering languages with our
							cutting-edge AI systems. Experience the future of education in a
							retro-futuristic wasteland.
						</p>

						<div className={st.heroButtons}>
							<button
								className={`${st.btn} ${st.btnPrimary}`}
								onClick={() => navigate('/signup')}
							>
								<FiUsers className={st.btnIcon} />
								Join Vault Today
							</button>
							<button
								className={`${st.btn} ${st.btnSecondary}`}
								onClick={() => navigate('/about')}
							>
								<FiBook className={st.btnIcon} />
								Explore Features
							</button>
						</div>
					</div>
				</section>
				<section className={st.statsSection}>
					<div className={st.container}>
						<div className={st.statsGrid}>
							<div className={st.statItem}>
								<FiUsers className={st.statIcon} />
								<div className={st.statNumber}>10,000+</div>
								<div className={st.statLabel}>Vault Dwellers</div>
							</div>
							<div className={st.statItem}>
								<FiBook className={st.statIcon} />
								<div className={st.statNumber}>50,000+</div>
								<div className={st.statLabel}>Lessons Completed</div>
							</div>
							<div className={st.statItem}>
								<FiAward className={st.statIcon} />
								<div className={st.statNumber}>95%</div>
								<div className={st.statLabel}>Success Rate</div>
							</div>
							<div className={st.statItem}>
								<FiMessageSquare className={st.statIcon} />
								<div className={st.statNumber}>24/7</div>
								<div className={st.statLabel}>AI Support</div>
							</div>
						</div>
					</div>
				</section>

				<section className={st.systemsSection}>
					<div className={st.container}>
						<div className={st.sectionHeader}>
							<h2 className={st.sectionTitle}>VAULT-TEC SYSTEMS</h2>
							<p className={st.sectionSubtitle}>
								Advanced AI-powered tools for language mastery
							</p>
						</div>

						<div className={st.systemsGrid}>
							<div className={`${st.systemCard} ${st.terminal}`}>
								<div className={st.systemIcon}>AI</div>
								<h3 className={st.systemTitle}>AI Replicant Tutor</h3>
								<p className={st.systemDescription}>
									Adaptive conversational AI that personalizes lessons based on
									your progress and learning style.
								</p>
								<ul className={st.systemFeatures}>
									<li>Real-time conversations</li>
									<li>Personalized feedback</li>
									<li>24/7 availability</li>
								</ul>
							</div>

							<div className={`${st.systemCard} ${st.terminal}`}>
								<div className={st.systemIcon}>🎤</div>
								<h3 className={st.systemTitle}>Speech Decoder</h3>
								<p className={st.systemDescription}>
									Perfect your pronunciation with advanced speech recognition
									and instant feedback.
								</p>
								<ul className={st.systemFeatures}>
									<li>Voice analysis</li>
									<li>Accent training</li>
									<li>Progress tracking</li>
								</ul>
							</div>

							<div className={`${st.systemCard} ${st.terminal}`}>
								<div className={st.systemIcon}>✍️</div>
								<h3 className={st.systemTitle}>Writing Scanner</h3>
								<p className={st.systemDescription}>
									AI-powered writing assistant that corrects grammar, style, and
									provides suggestions.
								</p>
								<ul className={st.systemFeatures}>
									<li>Grammar checking</li>
									<li>Style improvements</li>
									<li>Vocabulary enhancement</li>
								</ul>
							</div>

							<div className={`${st.systemCard} ${st.terminal}`}>
								<div className={st.systemIcon}>📊</div>
								<h3 className={st.systemTitle}>Adaptive Plan</h3>
								<p className={st.systemDescription}>
									Dynamic learning path that adjusts to your goals, pace, and
									performance.
								</p>
								<ul className={st.systemFeatures}>
									<li>Personalized curriculum</li>
									<li>Progress analytics</li>
									<li>Goal tracking</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className={st.ctaSection}>
					<div className={st.container}>
						<div className={st.ctaTerminal}>
							<h2 className={st.ctaTitle}>READY TO ENTER THE VAULT?</h2>
							<p className={st.ctaText}>
								Join our community of language learners and experience the
								future of education today.
							</p>
							<div className={st.ctaButtons}>
								<a
									href='/signup'
									className={`${st.btn} ${st.btnLarge} ${st.btnPrimary}`}
								>
									Start Learning Free
								</a>
								<a
									href='/about'
									className={`${st.btn} ${st.btnLarge} ${st.btnGhost}`}
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
